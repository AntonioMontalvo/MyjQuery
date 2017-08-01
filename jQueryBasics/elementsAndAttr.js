console.log("Hello JQuery Elements and Attributes");

////////////////////////////////////////////////
//We can create new element and add attributes//
////////////////////////////////////////////////

var newH3header = $("<h3>");
newH3header.html("INSPECT THIS PAGE AND CHECK AL MY ATTRIBUTES IN THIS ELEMENT. SUPER COOL WHAT YOU CAN DO WITH JUST A FEW LINES OF CODE. THAT IS THE ADVANTAGE OF USING THIS LIBRARY, LESS WIRTING EQUAL RESULTS.");

newH3header.attr("id", "uniqueh3"); //add an attribute 

newH3header.attr({
    data: "I'm a new h3",
    title: "How to add attributes using the .attr"
});

$("#firstAppendment").append(newH3header);

/////////////
//Chainiing//
/////////////

$("#content")
    .find("li")
    .eq(0)
    .css( "background-color", "red" );
$("#content")
    .find("li") 
    .eq(2)
    .html("This shows that Chainiing works. Keep reading to find out more!")
    .css( "background-color", "pink" );
    

