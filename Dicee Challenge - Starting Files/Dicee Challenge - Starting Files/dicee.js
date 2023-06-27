//for dice 1
var randomNumber1 = Math.floor((Math.random()*6)+1)

var randomImages1 = "./images/"+"dice"+randomNumber1+".png"

document.querySelectorAll("img")[0].setAttribute("src",randomImages1)

//for dice2
var randomNumber2 = Math.floor((Math.random()*6)+1)

var randomImages2 = "./images/"+"dice"+randomNumber2+".png"

document.querySelectorAll("img")[1].setAttribute("src",randomImages2)

//to give result who is winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "Player 1 is winner!";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerText = "Player 2 is winner!";
}else{
    document.querySelector("h1").innerText = "Draw!";
}