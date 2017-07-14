 
 var movies=[
{
state:true,
title:"Harry Potter",
stars:"5 stars" 
},
{
state:false,
title:"Nemo",
stars:"4 stars" 
},
{
state:true,
title:"Tarzan",
stars:"5 stars"
},
{
state:true,
title:"Bob Esponja",
stars:"10 stars"
}
];
var result;
 
 for (var i = 0; i < movies.length; i++) {

 	if(movies[i].state){
 		 result=" vista ";
 	}
 	else{
 		result=" No vista ";
 	}
 	console.log("\""+movies[i].title+"\"" +result+" - "+ movies[i].stars);
 }


 /*
 var obj ={
	name "Chuck",
	age: 45,
	isCool: false,
	friends:["bob","Tina"],
	add: function(x,y){
	return x+ y;
	}
 }
 obj.add(10,5);
 */