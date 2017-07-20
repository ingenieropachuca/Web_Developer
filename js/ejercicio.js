var p1Button=document.querySelector("#p1");
var p2Button=document.querySelector("#p2");
var resButton=document.querySelector("#res");
var input=document.querySelector("input");

var p1Display=document.querySelector("#p1Display");
var p2Display=document.querySelector("#p2Display");
var parrafo=document.querySelector("#p3Display");


var p1Score=0;
var p2Score=0;
var gameOver= false;
var winningScore=5;


p1Button.addEventListener("click",function(){
if(!gameOver)
{
p1Score++;
if(p1Score===winningScore)
{
	p1Display.classList.add("win");
	gameOver=true;
}
}
	p1Display.textContent = p1Score;
});

p2Button.addEventListener("click",function(){

if(!gameOver)
{
	p2Score++;
	if(p2Score===winningScore)
	{
		p2Display.classList.add("win");
		gameOver=true;
	}
}
	p2Display.textContent = p2Score;
});

resButton.addEventListener("click",function(){
	reset();
});

input.addEventListener("change",function(){
	parrafo.textContent= input.value;
	winningScore=Number(input.value);
	reset();
});

function reset(){
	p1Score=0;
	p2Score=0;
	p1Display.textContent=0;
	p2Display.textContent=0;
	gameOver=false;
	p1Display.classList.remove("win");
	p2Display.classList.remove("win");
}