var left=document.getElementById("left");
var right=document.getElementById("right");
var colourOutput=document.getElementById("color-output");
var body=document.getElementById("body");
body.style.background="linear-gradient(to right, "+left.value+", "+right.value+")";


left.addEventListener("input", function(){
    console.log(left.value);
    body.style.background="linear-gradient(to right, "+left.value+", "+right.value+")";
});

right.addEventListener("input", function(){
    console.log(right.value);
    body.style.background="linear-gradient(to right, "+left.value+", "+right.value+")";
});


function myFunction() {
    // Get the text field
    var copyText = body.style.background;
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
  
    // Alert the copied text
    alert("Copied the text:  " + copyText);
  }
