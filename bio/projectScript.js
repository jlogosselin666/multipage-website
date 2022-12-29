
function checking() {
	
	var checkboxgroup = document.getElementById('checkboxgroup').getElementsByTagName("input");

	var checkedcount = 0;
	
	for (var i = 0; i < checkboxgroup.length; i++) {
		checkedcount += (checkboxgroup[i].checked) ? 1 : 0;
	}

	if ((checkedcount === 4) || (checkedcount === 5)) {
		console.log("Don't cheat! You can only tick 3 boxes.");
		alert("Don't cheat! You can only tick 3 boxes.");
		this.checked = false;
		checkedcount = 0;
		if (this.checked = true){
			reset();
		}
	}
	else if ((checkedcount === 1) || (checkedcount === 2)){
		console.log("You must tick 3 boxes.");
		alert("You must tick 3 boxes.");
		this.checked = false;
		checkedcount = 0;
		if (this.checked = true){
			reset();
		}
	}
	else{
		myProgramFunction();
	}

}		
		

function myProgramFunction() {
			
  	var choice1 = document.getElementById("checkbox1");
	var choice2 = document.getElementById("checkbox2");
	var choice3 = document.getElementById("checkbox3");
	var choice4 = document.getElementById("checkbox4");
	var choice5 = document.getElementById("checkbox5");

	var outputtext = document.getElementById("result");

	var temp = "";

	if((choice1.checked === true) && (choice2.checked === true) && (choice5.checked === true)){

		temp = temp + "Well done! You guessed correctly!";

		outputtext.innerHTML = temp;
		outputtext.style.color='#008000';
		outputtext.style.fontWeight="900";
				
	}
	else{
		temp = temp + "Incorrect, sorry...";

		outputtext.innerHTML = temp;
		outputtext.style.color='#FF0000';
		outputtext.style.fontWeight="900";
    	}
}


function reset() {

  	var box1 = document.getElementById("checkbox1");
	var box2 = document.getElementById("checkbox2");
	var box3 = document.getElementById("checkbox3");
	var box4 = document.getElementById("checkbox4");
	var box5 = document.getElementById("checkbox5");

	box1.checked = false;
	box2.checked = false;
	box3.checked = false;
	box4.checked = false;
	box5.checked = false;

	var outputtext = document.getElementById("result");

	outputtext.innerHTML = "Result...?";
	outputtext.style.color='#000000';
	outputtext.style.fontWeight="500";

}











