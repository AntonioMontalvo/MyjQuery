console.log("Hello Calculator");

var toCalculateNum = $("#result").text(); // grab the value of this div 

// create references to the following
var initNum;
var firstDigitZero;
var secondDigitDot;
var doWehaveDot = false;
var num1;
var num2;
var value1;
var value2;

var operations = {
    plus: false,
    minus: false,
    multiply: false,
    divide: false
}

// add data values to this id. We will use them to assign the dot
$("#dot").data("toggleDot", { printDot: ".", noPrint: "" });
var theDot = $("#dot").data("toggleDot").printDot;
var noDot = $("#dot").data("toggleDot").noPrint;


//our IIFE dynamically assigns values to other divs 
(function initialize() {
    initNum = 0;
    $("#result").append(initNum);
    $("#dot").append(theDot);
})();

//check if the first digit is 0
function isZeroFirst() {
    if (toCalculateNum.charAt(0) == 0) {
        firstDigitZero = true;
    }
    if (toCalculateNum.charAt(0) != 0) {
        firstDigitZero = false;
    }
    return firstDigitZero;
}

//check if the second digit is a point
function isDotSecond() {
    if (toCalculateNum.charAt(1) == ".") {
        secondDigitDot = true;
        return secondDigitDot;
    } else {
        secondDigitDot = false;
        return secondDigitDot;
    }

}

//run an operation

function chooseOperation(){
	if (value1 != undefined && value2 != undefined){
		if (operations.plus == true){
			$("#result").text(add(value1, value2));
		}
	}
}

//to add
function add(num1, num2) {
    var result = num1 + num2;
    return result;
}

//clicking a number
$(".num").click(function() {
    var selectedNum = $(this).text();
    toCalculateNum = $("#result").text();
    isZeroFirst();
    isDotSecond();

    for (key in operations) {
        if (operations.plus === true || operations.minus == true || operations.multiply == true || operations.divide == true ) {
            $("#result").text("");
            $("#result").text(selectedNum);
            return;
        }
    }

    if (firstDigitZero == true && secondDigitDot == false && selectedNum != 0 && toCalculateNum.length < 9) {
        $("#result").text(selectedNum);
        return;
    }

    if (firstDigitZero == false && toCalculateNum.length < 9) {
        $("#result").append(selectedNum);
        return;
    }
    if (firstDigitZero == true && secondDigitDot == true && toCalculateNum.length < 9) {
        $("#result").append(selectedNum);
        return;
    }





});

//clicking period
$("#dot").click(function() {
    var selectedNum = $(this).text();
    toCalculateNum = $("#result").text();
    if (doWehaveDot == false) {
        $("#result").append(theDot);
    }
    doWehaveDot = true;
});

//clicking a calculation
$(".sym").click(function passValueToOperation() {
    var selectedSymbol = $(this).text();
    toCalculateNum = $("#result").text();
    chooseOperation();

    if (selectedSymbol == "+") {
        operations.plus = true;
    }

    if (value1 != undefined && value2 == undefined) {
        value2 = value1;
        value1 = parseInt(toCalculateNum);
        console.log("v1 " + value1 + " v2 " + value2);
    }

    if (value1 == undefined) {
        value1 = parseInt(toCalculateNum);
        console.log("v1 " + value1 + " v2 " + value2);
    }

});