var randomNumber1 = Math.ceil(6 * Math.random())
var randomNumber2 = Math.ceil(6 * Math.random())

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 +".png")
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 +".png")

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1  Wins"
    document.querySelector(".one").style.color="gold"
} else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2  Wins 🚩"
    document.querySelector(".two").style.color="gold"
} else {
        document.querySelector("h1").innerHTML="Draw :/"
}
