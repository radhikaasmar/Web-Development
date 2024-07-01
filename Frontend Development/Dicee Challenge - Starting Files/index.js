var randomVariable1 = Math.floor(Math.random()*(6-1+1)+1);
var randomVariable2 = Math.floor(Math.random()*(6-1+1)+1);

var image1 = "images/dice"+randomVariable1+".png";
var image2 = "images/dice"+randomVariable2+".png"

document.querySelector(".dice .img1").setAttribute("src", image1);
document.querySelector(".dice .img2").setAttribute("src", image2);

if(randomVariable1>randomVariable2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins";
}