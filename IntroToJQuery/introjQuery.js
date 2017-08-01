console.log("Hello jQuery");


$(document).ready(function() {
    // Thanks to the handy $ selector from jQuery and its library of methods with jQuery we can easily inject full HTML.
    $("#emptyDiv").html("<h2>Hello jQuery!</h2>");

    // And we can just as easily append a new line.
    $('#emptyDiv').append("The header above and this line of text were not part of the original HTML. We've been created using the jQuery library!");
});
