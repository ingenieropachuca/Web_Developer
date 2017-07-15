var todos=["buy"];
var input = prompt("que te gustaria hacer? ");
while(input !== "quit"){
if(input==="list"){
	todos.forEach(function(todo, i){
		console.log(i+": "+todo);
	});

}else if(input==="new"){
	var todo = prompt("que quieres agrgar a la lista? ");
	todos.push(todo);
}else if (input==="delete"){
var index =prompt("que numero te gustaria eliminar ");
todos.splice(index,1);
}
input = prompt("que te gustaria hacer? ");
}
console.log("OK BYE");

// printReverse // isUniform