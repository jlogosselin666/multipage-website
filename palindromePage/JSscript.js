var mainButton = document.getElementById("checkButton");
var resetButtonDec = document.getElementById("resetButton");
var inputArea = document.getElementById("myInput");

function checkIfPalindrome(){
	
	var temp = document.getElementById("myInput").value;
	
	document.getElementById("badResult").innerHTML = "";
	document.getElementById("goodResult").innerHTML = "";

	//first: setting all characters to uppercase:
	var str = temp.toUpperCase();	
	var fullLength = str.length;
	var result;
		
	//next: get rid of all non alphabetical/numerical characters:
	for(var x=0; x<fullLength; x++){
	
		var l = fullLength-1;
		c = str.charCodeAt(x);
		 
		if(c != 65 && c != 66 && c != 67 && c != 68 && 
			c != 69 && c != 70 && c != 71 && c != 72 && 
			c != 73 && c != 74 && c != 75 && c != 76 && 
			c != 77 && c != 78 && c != 79 && c != 80 && 
			c != 81 && c != 82 && c != 83 && c != 84 && 
			c != 85 && c != 86 && c != 87 && c != 88 && 
			c != 89 && c != 90){
				
			var after = x+1;			
			sstr1 = str.substr(0,x);
			sstr2 = str.substr(after, l);
			str = sstr1.concat(sstr2);			
			fullLength = str.length;			
			x=0;			
		}
	}

	var halfLength = fullLength / 2;
	var i = 0;
	var j = fullLength-1;
	var warning = 0;

	//comparing each character, from one end of the string to the other
	while(i <= halfLength && j >= halfLength && warning == 0){

		var char1 = str.charAt(i); 
		var char2 = str.charAt(j);
	
		if(char1 != char2)
			warning += 1;

		++i;
		--j;
	}

	if(warning > 0){
		result = "not a palindrome";
		document.getElementById("badResult").innerHTML = result;
	}
	else{
		result = "is a palindrome!";
		document.getElementById("goodResult").innerHTML = result;
	}	
}
mainButton.addEventListener("click", checkIfPalindrome, false);

function resetAll(){
	
	var box = document.getElementById("myInput").value;
	box = box.substr(0,0);
	document.getElementById("myInput").value = box;
	document.getElementById("badResult").innerHTML = "";
	document.getElementById("goodResult").innerHTML = "";
}
resetButtonDec.addEventListener("click", resetAll, false);

function clearAll(){
	
	var box = document.getElementById("myInput").value;
	
	if(box == ""){
		document.getElementById("badResult").innerHTML = "";
		document.getElementById("goodResult").innerHTML = "";
	}	
}
inputArea.addEventListener("input", clearAll, false);











