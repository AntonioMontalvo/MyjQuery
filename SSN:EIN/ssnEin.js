console.log("Hello SSN/EIN");


$(document).ready(function() {

    $("#getssn").click(function() {
        var ssn = $("#ssn").val();
        var ssnArray = ssn.split("");
        

        $("#ssn1").html(ssnArray[0]);
        for ( var i = 0; i < 11; i++){
        	var newBox = $("<div>");
        	newBox.attr("id", i);
        	newBox.attr("class", "ssnEin");
        	newBox.html(ssnArray[i]);
        	$("#here").append(newBox);


        }
       

        console.log(ssn);
        console.log(ssnArray);
        

    })

});
