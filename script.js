var numCircles = 3;
var colors = randomColors(numCircles);
var circle = document.querySelectorAll(".circle");
var chosenColor = choseColor();
var RGB = document.getElementById("rgbCode");
var alert = document.querySelector(".alert");
var h1 = document.querySelector("h1");
var newGame = document.querySelector("#newGame");

newGame.addEventListener("click", function(){
    //generate all new colors
    colors = randomColors(numCircles);
    //pick a new random color from the array
    chosenColor = choseColor();
    //change colorDisplay to match picked color
    RGB.textContent = chosenColor;
    this.textContent = "New game !";
    alert.textContent = "";
    //change colors of circles
    for (var i = 0; i < circle.length; i++) {
        circle[i].style.background = colors[i];
    }
    h1.style.color = "#1D2787";
})

RGB.textContent = chosenColor;

for(var i = 0; i < circle.length; i++) {
    //add initial colors to circles
    circle[i].style.background = colors[i];
    //add click listeners to circles
    circle[i].addEventListener("click", function() {
        //grab color of picked circle
        var clickedColor = this.style.background;
        //compare color to chosenColor
        if (clickedColor === chosenColor) {
            alert.textContent = "Correct!";
            alert.style.color = "#2BE032";
            newGame.textContent = "Play Again ?";
            changeColors(clickedColor);
            h1.style.color = clickedColor;
        }else{
            this.style.background = "#fff";
            alert.textContent = "Wrong!! Try Again";
            alert.style.color = "#E04C2B";
        }
    })
}

function changeColors(color){
    //loop through all circles
    for (var i = 0; i < circle.length; i++) {
        //change each color to match given color
        circle[i].style.background = color;
    }

}

function choseColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function randomColors(num){
    //make and array
    var arr = [];
    //add num random colors to array
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
        //get random color and push into array
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0-255
    var R = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var G = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var B = Math.floor(Math.random() * 256);

    return "rgb(" + R +", " + G + ", " + B +")";
}
