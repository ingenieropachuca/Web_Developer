/*
var tag = document.getElementById("high");
var tags = document.getElementsByTagName("ul");
var tags2 = document.getElementsByClassName("bolded");

var h1= document.querySelector("hi");
var li= document.querySelector("#high");
var li= document.querySelector(".bolded");

//TOMA TODOS LOS li
var lis = document.querySelectorAll("li");
//TOMA SOLO UN li el primero 
var lis2 = document.querySelector("li");
*/

//AGERGAR CLASES DE JAVA CSS CON JAVASCRIPT A LOS ELEMENTOS
//h1.classList.add("hello");

//MODIFICAR EL TEXTO 
//h1.textContent = "OLA K ACE?";

//MODIFICAR EL HTML EN UN DOCUMENTO CON JS 
//h1.innerHTML ="<h1>soy una planta</h1>"

//MANIPULAR ATRIBUTOS :) 

//var img1 = document.getElementsByTagName("img")[0]
//img1.getAttribute("src");
//img1.setAttribute("src", "http://www.google.com");

/*
// INTERCATIVIDAD CON JAVASCRIPT 
var h1= document.querySelector("h1");
h1.addEventListener("click",function(){
	alert("h1 was clicked!!");
});

// CAMBIAR EL COLOR DEL FONDO 
h1.addEventListener("click",function(){
	h1.style.background = "orange";
});
//SE AGREGARON VARIOS LISENER AL MISMO ELEMENTO H1 
*/

/*
//CAMBIAR VARIOS ELEMENTOS CON UN FOR 
var lis = document.querySelectorALL("li");
for(var i=0; i<lis.length; i++){
	lis[i].addEventListener("click",function(){
	this.style.color="pink";
	})
}
*/

/*
//PARA LOS BOTONES 
var button = document.querySelector("button");
var paragraph= document.querySelector("p");
button.addEventListener("click", changeText);

function changeText(){
	paragraph.textContent= "Some clicked the button!";
}
*/

/*
//EJERCICIO VERSION 1
var button=document.querySelector("button");
var isPurple=false;

button.addEventListener("click",function(){
	if(isPurple)
	{
		document.body.style.background="white";
		isPurple=false;
	}else{
		document.body.style.background="purple";
		isPurple=true;
	}
});
*/


//EJERCICIO VERSION 2 AGREGANDO LA CLASE DE CSS TOGGLE PARA QUE CAMBIE 
var button=document.querySelector("button");

button.addEventListener("click",function(){
document.body.classList.toggle("purple");
});