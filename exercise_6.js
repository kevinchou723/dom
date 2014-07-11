window.onload = function() {
  
var lastClicked = document.getElementById("last_clicked");  
var previousClicked = document.getElementById("previously_clicked") 
var currentlyClicked = document.getElementById("currentlyClicked")
var divOne = 
    document.getElementById("div_1");
    divOne.onclick = function(event){
       function backgroundcolorchange(color){
        document.divOne.backgroundcolor = "blue";
        return false;
       }
       function backgroundcolorchange(color){
        document.divOne.backgroundcolor = "white";
        return false;
       }
       currentlyClicked.innerHTML = previouslyClicked.innerHTML
       previouslyClicked.innerHTML = lastClicked.innerHTML;
       lastClicked.innerHTML = divOne.innerHTML;
      
     };

var divTwo = 
    document.getElementById("div_2");
    divTwo.onclick = function(event){
      function colorchange(color){
        document.divTwo.color = "blue";
        return false;
       }
        function backgroundcolorchange(color){
        document.divTwo.backgroundcolor = "white";
        return false;
       }
       currentlyClicked.innerHTML = previouslyClicked.innerHTML
        previouslyClicked.innerHTML = lastClicked.innerHTML;
       lastClicked.innerHTML = divTwo.innerHTML;
     };
  
var divThree = 
    document.getElementById("div_3");
    divThree.onclick = function(event){
      function colorchange(color){
        document.divThree.color = "blue";
        return false;
       }
        function backgroundcolorchange(color){
        document.divThree.backgroundcolor = "white";
        return false;
       }
       currentlyClicked.innerHTML = previouslyClicked.innerHTML
      previouslyClicked.innerHTML = lastClicked.innerHTML;
       lastClicked.innerHTML = divThree.innerHTML;
     };

var divFour = 
    document.getElementById("div_4");
    divFour.onclick = function(event){
      function colorchange(color){
        document.divFour.color = "blue";
        return false;
       }
        function backgroundcolorchange(color){
        document.divFour.backgroundcolor = "white";
        return false;
       }
       currentlyClicked.innerHTML = previouslyClicked.innerHTML
      previouslyClicked.innerHTML = lastClicked.innerHTML;
       lastClicked.innerHTML = divFour.innerHTML;
     };
 
var divFive = 
    document.getElementById("div_5");
    divFive.onclick = function(event){
      function colorchange(color){
        document.divFive.color = "blue";
        return false;
       }
        function backgroundcolorchange(color){
        document.divFive.backgroundcolor = "white";
        return false;
       }
       currentlyClicked.innerHTML = previouslyClicked.innerHTML
      previouslyClicked.innerHTML = lastClicked.innerHTML;
       lastClicked.innerHTML = divFive.innerHTML;
     };
  };





