

									/****************************************
									*										*
									*										*
									*										*
									*	SECTION 1: DECIMAL VALUE CONVERTER	*
									*										*
									*										*
									*										*
									****************************************/
									

var inputAreaDec = document.getElementById("myInputDec");
var convertButtonDec = document.getElementById("btnDec");
var resetButtonDec = document.getElementById("resetDec");

function checkCharDec(){
	
	var elString = document.getElementById("myInputDec").value;
	var c;
	
	for(var x=0; x<elString.length; x++){
		
		 c = elString.charCodeAt(x);
		 
		 if(c != 48 && c != 49 && c != 50 && c != 51 && c != 52 && c != 53 && c != 54 && c != 55 && 
			c != 56 && c != 57){
				
			alert("Invalid character(s)! Only characters 0-9 allowed in decimal expressions.");
			elString = elString.substr(0,x);
			document.getElementById("myInputDec").value = elString;
		}		 
	}
}
inputAreaDec.addEventListener("input", checkCharDec, false);


function deleteAllDec(){
	
	var elString = document.getElementById("myInputDec").value;
	elString = elString.substr(0,0);
	document.getElementById("myInputDec").value = elString;

	document.getElementById("decToBin").innerHTML = "";
	document.getElementById("decToOct").innerHTML = "";
	document.getElementById("decToHex").innerHTML = "";	
}
resetButtonDec.addEventListener("click", deleteAllDec, false);
		
function convertDecValue(){
	
	//CONVERTING DECIMAL TO BINARY
	
	var binaryLine = [0];
	
	var x = document.getElementById("myInputDec").value;
    var res1 = Number(x);

	var i = 0;
	
	while (res1 != 0){
		
		if(res1%2 == 0){					
			binaryLine[i] = 0;
			res1 = res1/2;
			res1 = Math.trunc(res1);
			i = i + 1;
		}
		else{
			binaryLine[i] = 1;
			res1 = res1/2;
			res1 = Math.trunc(res1);
			i = i + 1;
		}
	}
	
	var big = i-1;
	var small = 0;
	var temp;

	while(small <= big) {
		
		temp = binaryLine[big];
		binaryLine[big] = binaryLine[small];
		binaryLine[small] = temp;
		++small;
		--big;
	}

	var final1 = binaryLine.join("");
	document.getElementById("decToBin").innerHTML = "Binary result = <span>" + final1 + "<sub>2</sub></span>";
	
//***************************************************************************************
//***************************************************************************************
	
	//CONVERTING DECIMAL TO OCTAL
	
	var octalLine = [0];
	var res2 = Number(x);
	var remainder1;
	var j = 0;
	
	while(res2 >= 8) {
		
		remainder1 = res2 % 8;
		octalLine[j] = remainder1;
		res2 /= 8;
		res2 = Math.trunc(res2);
		j = j + 1;	
	}
	octalLine[j] = res2;
	
	var big2 = j;
	var small2 = 0;
	var temp2;

	while(small2 <= big2) {
		
		temp2 = octalLine[big2];
		octalLine[big2] = octalLine[small2];
		octalLine[small2] = temp2;
		++small2;
		--big2;
	}

	var final2 = octalLine.join("");
	document.getElementById("decToOct").innerHTML = "Octal result = <span>" + final2 + "<sub>8</sub></span>";
	
//***************************************************************************************
//***************************************************************************************	
	
	//CONVERTING DECIMAL TO HEX
	
	var hexLine = [0];
	
    var res3 = Number(x);
	
	var k = 0;

	remainder2 = 0;
	
	//case (A): numbers from 0 to 15
	
	if (res3<16){
		
		if (res3<10){
			document.getElementById("decToHex").innerHTML = "Hexadecimal result = <span>" + res3 + "<sub>16</sub></span>";
		}
		
		else {	
			if (res3==10){	
				hexLine[0] = 'A';
			}
			if (res3==11){	
				hexLine[0] = 'B';
			}
			if (res3==12){	
				hexLine[0] = 'C';
			}
			if (res3==13){	
				hexLine[0] = 'D';
			}
			if (res3==14){	
				hexLine[0] = 'E';
			}
			if (res3==15){	
				hexLine[0] = 'F';
			}
				
			document.getElementById("decToHex").innerHTML = "Hexadecimal result = <span>" + hexLine[0] + "<sub>16</sub></span>";
		}
	}			
	
	//case (B): numbers from 16 upwards
	else{
		
		//saving characters in a loop, as long as the 
		while (res3>=16) {
			
			var t;
			remainder2 = res3 % 16;
			remainder2 = Math.trunc(remainder2);
			
			//situation 1:
			if (remainder2 != 10 && remainder2 != 11 && remainder2 != 12 && remainder2 != 13 && remainder2 != 14 && remainder2 != 15){
				hexLine[k] = remainder2;
			}
			
			//situation 2:		
			else {
				if (remainder2==10){
					hexLine[k] = 'A';
				}
				if (remainder2==11){
					hexLine[k] = 'B';
				}
				if (remainder2==12){
					hexLine[k] = 'C';
				}
				if (remainder2==13){	
					hexLine[k] = 'D';
				}
				if (remainder2==14){
					hexLine[k] = 'E';
				}
				if (remainder2==15){
					hexLine[k] = 'F';
				}
					
			}
			
			res3 /= 16;
			res3 = Math.trunc(res3);
			++k;
		}
		
		var l = k;
		
		if (res3>=10 && res3<=15) {
			
			if (res3==10){	
				hexLine[l] = 'A';
			}
			if (res3==11){
				hexLine[l] = 'B';
			}
			if (res3==12){	
				hexLine[l] = 'C';
			}
			if (res3==13){	
				hexLine[l] = 'D';
			}
			if (res3==14){	
				hexLine[l] = 'E';
			}
			if (res3==15){	
				hexLine[l] = 'F';
			}
		}	
		else
			hexLine[l] = res3;
		
		var big3 = k;
		var small3 = 0;
		var temp3;

		while(small3 <= big3) {
			
			temp3 = hexLine[big3];
			hexLine[big3] = hexLine[small3];
			hexLine[small3] = temp3;
			++small3;
			--big3;
		}

		var final3 = hexLine.join("");
		document.getElementById("decToHex").innerHTML = "Hexadecimal result = <span>" + final3 + "<sub>16</sub></span>";

	}	
}
convertButtonDec.addEventListener("click", convertDecValue, false);


									/****************************************
									*										*
									*										*
									*										*
									*	SECTION 2: OCTAL VALUE CONVERTER	*
									*										*
									*										*
									*										*
									****************************************/
									
									
var inputAreaOct = document.getElementById("myInputOct");
var convertButtonOct = document.getElementById("btnOct");
var resetButtonOct = document.getElementById("resetOct");

function checkCharOct(){
	
	var elString = document.getElementById("myInputOct").value;
	var c;
	
	for(var x=0; x<elString.length; x++){
		
		 c = elString.charCodeAt(x);
		 
		 if(c != 48 && c != 49 && c != 49 && c != 50 && c != 51 && c != 52 && 
		 c != 53 && c != 54 && c != 55){
			 
			alert("Invalid character(s)! Only characters 0-7 accepted in octal expressions.");
			elString = elString.substr(0,x);
			document.getElementById("myInputOct").value = elString;
		 }
	}
}

inputAreaOct.addEventListener("input", checkCharOct, false);

function deleteAllOct(){
	
	var elString = document.getElementById("myInputOct").value;
	elString = elString.substr(0,0);
	document.getElementById("myInputOct").value = elString;

	document.getElementById("octToDec").innerHTML = "";
	document.getElementById("octToBin").innerHTML = "";
	document.getElementById("octToHex").innerHTML = "";	
}
resetButtonOct.addEventListener("click", deleteAllOct, false);
		
function convertOctValue(){
	
	//CONVERTING OCTAL TO DECIMAL:
	//reminder: 345 octal = (3 * 8^2) + (4 * 8^1) + (5 * 8^0) = (3 * 64) + (4 * 8) + (5 * 1) = 229 decimal
	
	var res1 = document.getElementById("myInputOct").value;
	var len = res1.length;
	var sumOcts = 0;	
	var i;
	var index = 0;

	for(i=len-1; i>=0; --i) {
			
		var c = res1.charAt(index);
		var t;
		
		if (c == '0'){
			sumOcts += 0;
		}
		if (c == '1'){
			t = Math.pow(8, i);
			sumOcts += t;
		}
		if (c == '2'){
			t = Math.pow(8, i);
			t *= 2;
			sumOcts += t;
		}
		if (c == '3'){
			t = Math.pow(8, i);
			t *= 3;
			sumOcts += t;
		}
		if (c == '4'){
			t = Math.pow(8, i);
			t *= 4;
			sumOcts += t;
		}
		if (c == '5'){
			t = Math.pow(8, i);
			t *= 5;
			sumOcts += t;
		}
		if (c == '6'){
			t = Math.pow(8, i);
			t *= 6;
			sumOcts += t;
		}
		if (c == '7'){
			t = Math.pow(8, i);
			t *= 7;
			sumOcts += t;
		}
		
		index++;
	}
	
	document.getElementById("octToDec").innerHTML = "Decimal result = <span>" + sumOcts + "<sub>10</sub></span>";
	
//***************************************************************************************
//***************************************************************************************
	
	//CONVERTING DECIMAL TO BINARY
	
	var binaryLine = [0];
	var i = 0;
	var tempSumOcts = sumOcts;
	
	while (tempSumOcts != 0){
		
		if(tempSumOcts%2 == 0){					
			binaryLine[i] = 0;
			tempSumOcts = tempSumOcts/2;
			tempSumOcts = Math.trunc(tempSumOcts);
			i = i + 1;
		}
		else{
			binaryLine[i] = 1;
			tempSumOcts = tempSumOcts/2;
			tempSumOcts = Math.trunc(tempSumOcts);
			i = i + 1;
		}
	}
	
	var big = i-1;
	var small = 0;
	var temp;

	while(small <= big) {
		
		temp = binaryLine[big];
		binaryLine[big] = binaryLine[small];
		binaryLine[small] = temp;
		++small;
		--big;
	}

	var final1 = binaryLine.join("");
	document.getElementById("octToBin").innerHTML = "Binary result = <span>" + final1 + "<sub>2</sub></span>";
	
//***************************************************************************************
//***************************************************************************************
	
	//CONVERTING DECIMAL TO HEX
	
	var hexLine = [0];
	var k = 0;

	remainder2 = 0;
	
	//case (A): numbers from 0 to 15
	
	if (sumOcts<16){
		
		if (sumOcts<10){
			document.getElementById("octToHex").innerHTML = "Hexadecimal result = <span>" + sumOcts + "<sub>16</sub></span>";
		}
		
		else {	
			if (sumOcts==10){	
				hexLine[0] = 'A';
			}
			if (sumOcts==11){	
				hexLine[0] = 'B';
			}
			if (sumOcts==12){	
				hexLine[0] = 'C';
			}
			if (sumOcts==13){	
				hexLine[0] = 'D';
			}
			if (sumOcts==14){	
				hexLine[0] = 'E';
			}
			if (sumOcts==15){	
				hexLine[0] = 'F';
			}
				
			document.getElementById("octToHex").innerHTML = "Hexadecimal result = <span>" + hexLine[0] + "<sub>16</sub></span>";
		}
	}			
	
	//case (B): numbers from 16 upwards
	else{
		
		//saving characters in a loop, as long as the 
		while (sumOcts>=16) {
			
			var t;
			remainder2 = sumOcts % 16;
			remainder2 = Math.trunc(remainder2);
			
			//situation 1:
			if (remainder2 != 10 && remainder2 != 11 && remainder2 != 12 && remainder2 != 13 && remainder2 != 14 && remainder2 != 15){
				hexLine[k] = remainder2;
			}
			
			//situation 2:		
			else {
				if (remainder2==10){
					hexLine[k] = 'A';
				}
				if (remainder2==11){
					hexLine[k] = 'B';
				}
				if (remainder2==12){
					hexLine[k] = 'C';
				}
				if (remainder2==13){	
					hexLine[k] = 'D';
				}
				if (remainder2==14){
					hexLine[k] = 'E';
				}
				if (remainder2==15){
					hexLine[k] = 'F';
				}
					
			}
			
			sumOcts /= 16;
			sumOcts = Math.trunc(sumOcts);
			++k;
		}
		
		var l = k;
		
		if (sumOcts>=10 && sumOcts<=15) {
			
			if (sumOcts==10){	
				hexLine[l] = 'A';
			}
			if (sumOcts==11){
				hexLine[l] = 'B';
			}
			if (sumOcts==12){	
				hexLine[l] = 'C';
			}
			if (sumOcts==13){	
				hexLine[l] = 'D';
			}
			if (sumOcts==14){	
				hexLine[l] = 'E';
			}
			if (sumOcts==15){	
				hexLine[l] = 'F';
			}
		}	
		else
			hexLine[l] = sumOcts;
		
		var big3 = k;
		var small3 = 0;
		var temp3;

		while(small3 <= big3) {
			
			temp3 = hexLine[big3];
			hexLine[big3] = hexLine[small3];
			hexLine[small3] = temp3;
			++small3;
			--big3;
		}

		var final3 = hexLine.join("");
		document.getElementById("octToHex").innerHTML = "Hexadecimal result = <span>" + final3 + "<sub>16</sub></span>";

	}
		
}
convertButtonOct.addEventListener("click", convertOctValue, false);

									
									
									/****************************************
									*										*
									*										*
									*										*
									*	SECTION 3: BINARY VALUE CONVERTER	*
									*										*
									*										*
									*										*
									****************************************/


var inputAreaBin = document.getElementById("myInputBin");
var convertButtonBin = document.getElementById("btnBin");
var resetButtonBin = document.getElementById("resetBin");

function checkCharBin(){
	
	var elString = document.getElementById("myInputBin").value;
	var c;
	
	for(var x=0; x<elString.length; x++){
		
		 c = elString.charCodeAt(x);
		
		if(c != 48 && c!= 49){
			alert("Invalid character(s)! Only 1s and 0s accepted in binary expressions.");
			elString = elString.substr(0,x);
			document.getElementById("myInputBin").value = elString;
		}
	}
}

inputAreaBin.addEventListener("input", checkCharBin, false);

function deleteAllBin(){
	
	var elString = document.getElementById("myInputBin").value;
	elString = elString.substr(0,0);
	document.getElementById("myInputBin").value = elString;

	document.getElementById("binToDec").innerHTML = "";
	document.getElementById("binToOct").innerHTML = "";
	document.getElementById("binToHex").innerHTML = "";	
}
resetButtonBin.addEventListener("click", deleteAllBin, false);
		
function convertBinValue(){
	
	//CONVERTING BINARY TO DECIMAL:
	//reminder: 1101101 octal = (2^6) + (2^5) + (2^3) + (2^2) + (2^0) = 109 decimal
	
	var res1 = document.getElementById("myInputBin").value;
	var len = res1.length;
	var sumBin = 0;	
	var i;
	var index = 0;

	for(i=len-1; i>=0; --i) {
			
		var c = res1.charAt(index);
		var t;

		if (c == '1'){
			t = Math.pow(2, i);
			sumBin += t;
		}
		
		index++;
	}
	
	document.getElementById("binToDec").innerHTML = "Decimal result = <span>" + sumBin + "<sub>10</sub></span>";
	
//***************************************************************************************
//***************************************************************************************
	
	//CONVERTING DECIMAL TO OCTAL

	var octalLine = [0];
	var tempDec = sumBin;
	var remainder1;
	var j = 0;
	
	while(tempDec >= 8) {
		
		remainder1 = tempDec % 8;
		octalLine[j] = remainder1;
		tempDec /= 8;
		tempDec = Math.trunc(tempDec);
		j = j + 1;	
	}
	octalLine[j] = tempDec;
	
	var big2 = j;
	var small2 = 0;
	var temp2;

	while(small2 <= big2) {
		
		temp2 = octalLine[big2];
		octalLine[big2] = octalLine[small2];
		octalLine[small2] = temp2;
		++small2;
		--big2;
	}

	var final2 = octalLine.join("");
	document.getElementById("binToOct").innerHTML = "Octal result = <span>" + final2 + "<sub>8</sub></span>";
		
//***************************************************************************************
//***************************************************************************************
	
	//CONVERTING DECIMAL TO HEX
	
	var hexLine = [0];
	
    var otherDec = sumBin;
	
	var k = 0;

	remainder2 = 0;
	
	//case (A): numbers from 0 to 15
	
	if (otherDec<16){
		
		if (otherDec<10){
			document.getElementById("binToHex").innerHTML = "Hexadecimal result = <span>" + otherDec + "<sub>16</sub></span>";
		}
		
		else {	
			if (otherDec==10){	
				hexLine[0] = 'A';
			}
			if (otherDec==11){	
				hexLine[0] = 'B';
			}
			if (otherDec==12){	
				hexLine[0] = 'C';
			}
			if (otherDec==13){	
				hexLine[0] = 'D';
			}
			if (otherDec==14){	
				hexLine[0] = 'E';
			}
			if (otherDec==15){	
				hexLine[0] = 'F';
			}
				
			document.getElementById("binToHex").innerHTML = "Hexadecimal result = <span>" + hexLine[0] + "<sub>16</sub></span>";
		}
	}			
	
	//case (B): numbers from 16 upwards
	else{
		
		//saving characters in a loop, as long as the 
		while (otherDec>=16) {
			
			var t;
			remainder2 = otherDec % 16;
			remainder2 = Math.trunc(remainder2);
			
			//situation 1:
			if (remainder2 != 10 && remainder2 != 11 && remainder2 != 12 && remainder2 != 13 && remainder2 != 14 && remainder2 != 15){
				hexLine[k] = remainder2;
			}
			
			//situation 2:		
			else {
				if (remainder2==10){
					hexLine[k] = 'A';
				}
				if (remainder2==11){
					hexLine[k] = 'B';
				}
				if (remainder2==12){
					hexLine[k] = 'C';
				}
				if (remainder2==13){	
					hexLine[k] = 'D';
				}
				if (remainder2==14){
					hexLine[k] = 'E';
				}
				if (remainder2==15){
					hexLine[k] = 'F';
				}
					
			}
			
			otherDec /= 16;
			otherDec = Math.trunc(otherDec);
			++k;
		}
		
		var l = k;
		
		if (otherDec>=10 && otherDec<=15) {
			
			if (otherDec==10){	
				hexLine[l] = 'A';
			}
			if (otherDec==11){
				hexLine[l] = 'B';
			}
			if (otherDec==12){	
				hexLine[l] = 'C';
			}
			if (otherDec==13){	
				hexLine[l] = 'D';
			}
			if (otherDec==14){	
				hexLine[l] = 'E';
			}
			if (otherDec==15){	
				hexLine[l] = 'F';
			}
		}	
		else
			hexLine[l] = otherDec;
		
		var big3 = k;
		var small3 = 0;
		var temp3;

		while(small3 <= big3) {
			
			temp3 = hexLine[big3];
			hexLine[big3] = hexLine[small3];
			hexLine[small3] = temp3;
			++small3;
			--big3;
		}

		var final3 = hexLine.join("");
		document.getElementById("binToHex").innerHTML = "Hexadecimal result = <span>" + final3 + "<sub>16</sub></span>";

	}
	
		
}
convertButtonBin.addEventListener("click", convertBinValue, false);									
									
									
									/****************************************
									*										*
									*										*
									*										*
									*	SECTION 4: HEX VALUE CONVERTER		*
									*										*
									*										*
									*										*
									****************************************/										
									
									
var inputAreaHex = document.getElementById("myInputHex");
var convertButtonHex = document.getElementById("btnHex");
var resetButtonHex = document.getElementById("resetHex");

function checkCharHex(){
	
	var elString = document.getElementById("myInputHex").value;
	var c;
	
	for(var x=0; x<elString.length; x++){
		
		 c = elString.charCodeAt(x);
		 
		 if(c != 48 && c != 49 && c != 49 && c != 50 && c != 51 && c != 52 && c != 53 && c != 54 && c != 55 && 
			c != 56 && c != 57 && c != 65 && c != 66 && c != 67 && c != 68 && c != 69 && c != 70 && c != 97 && 
			c != 98 && c != 99 && c != 100 && c != 101 && c != 102){
				
			alert("Invalid character(s)! Only characters 0-9 and a/A-f/F allowed in hexadecimal expressions.");
			elString = elString.substr(0,x);
			document.getElementById("myInputHex").value = elString;
		}		 
	}
}
inputAreaHex.addEventListener("input", checkCharHex, false);

function deleteAllHex(){
	
	var elString = document.getElementById("myInputHex").value;
	elString = elString.substr(0,0);
	document.getElementById("myInputHex").value = elString;

	document.getElementById("hexToDec").innerHTML = "";
	document.getElementById("hexToBin").innerHTML = "";
	document.getElementById("hexToOct").innerHTML = "";	
}
resetButtonHex.addEventListener("click", deleteAllHex, false);
	
		
function convertHexValue(){
	
	//CONVERTING HEXADECIMAL TO DECIMAL:
	
	var res1 = document.getElementById("myInputHex").value;
	var len = res1.length;
	
	//note: no swapping included for this algorithm
	var i;
	var index = 0;
	var sumHex = 0;
	
	for(i=len-1; i>=0; --i) {
		
		var c = res1.charAt(index);
		var t;

		if (c == '0'){
			sumHex += 0;
		}
		if (c == '1'){
			t = Math.pow(16, i);
			sumHex += t;
		}
		if (c == '2'){
			t = Math.pow(16, i);
			t *= 2;
			sumHex += t;
		}
		if (c == '3'){
			t = Math.pow(16, i);
			t *= 3;
			sumHex += t;
		}
		if (c == '4'){
			t = Math.pow(16, i);
			t *= 4;
			sumHex += t;
		}
		if (c == '5'){
			t = Math.pow(16, i);
			t *= 5;
			sumHex += t;
		}
		if (c == '6'){
			t = Math.pow(16, i);
			t *= 6;
			sumHex += t;
		}
		if (c == '7'){
			t = Math.pow(16, i);
			t *= 7;
			sumHex += t;
		}
		if (c == '8'){
			t = Math.pow(16, i);
			t *= 8;
			sumHex += t;
		}
		if (c == '9'){
			t = Math.pow(16, i);
			t *= 9;
			sumHex += t;
		}
		if (c == 'A' || c == 'a'){
			t = Math.pow(16, i);
			t *= 10;
			sumHex += t;
		}
		if (c == 'B' || c == 'b'){
			t = Math.pow(16, i);
			t *= 11;
			sumHex += t;
		}
		if (c == 'C' || c == 'c'){
			t = Math.pow(16, i);
			t *= 12;
			sumHex += t;
		}
		if (c == 'D' || c == 'd'){
			t = Math.pow(16, i);
			t *= 13;
			sumHex += t;
		}
		if (c == 'E' || c == 'e'){
			t = Math.pow(16, i);
			t *= 14;
			sumHex += t;
		}
		if (c == 'F' || c == 'f'){
			t = Math.pow(16, i);
			t *= 15;
			sumHex += t;
		}
		
		index++;
	}
	
	document.getElementById("hexToDec").innerHTML = "Decimal result = <span>" + sumHex + "<sub>10</sub></span>";

	
	//CONVERTING DECIMAL TO BINARY
	
	var binaryLine = [0];
	i = 0;
	var tempSumHex1 = sumHex;
	
	while (tempSumHex1 != 0){
		
		if(tempSumHex1 % 2 == 0){					
			binaryLine[i] = 0;
			tempSumHex1 = tempSumHex1/2;
			tempSumHex1 = Math.trunc(tempSumHex1);
			i = i + 1;
		}
		else{
			binaryLine[i] = 1;
			tempSumHex1 = tempSumHex1/2;
			tempSumHex1 = Math.trunc(tempSumHex1);
			i = i + 1;
		}
	}
	
	var big = i-1;
	var small = 0;
	var temp;

	while(small <= big) {
		
		temp = binaryLine[big];
		binaryLine[big] = binaryLine[small];
		binaryLine[small] = temp;
		++small;
		--big;
	}

	var final1 = binaryLine.join("");
	document.getElementById("hexToBin").innerHTML = "Binary result = <span>" + final1 + "<sub>2</sub></span>";

//***************************************************************************************
//***************************************************************************************
	
	//CONVERTING DECIMAL TO OCTAL:
	
	var octalLine = [];
	var tempSumHex2 = sumHex;
	var remainder;
	var j = 0;
	
	while(tempSumHex2 >= 8) {
		
		remainder = tempSumHex2 % 8;
		octalLine[j] = remainder;
		tempSumHex2 /= 8;
		tempSumHex2 = Math.trunc(tempSumHex2);
		j = j + 1;	
	}
	octalLine[j] = tempSumHex2;
	
	var big2 = j;
	var small2 = 0;
	var temp2;

	while(small2 <= big2) {
		
		temp2 = octalLine[big2];
		octalLine[big2] = octalLine[small2];
		octalLine[small2] = temp2;
		++small2;
		--big2;
	}

	var final2 = octalLine.join("");
	document.getElementById("hexToOct").innerHTML = "Octal result = <span>" + final2 + "<sub>8</sub></span>";	
		
}
convertButtonHex.addEventListener("click", convertHexValue, false);



									
									
									
									
									
									
									
									
