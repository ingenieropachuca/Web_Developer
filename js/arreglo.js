/*
function printReverse(arreglo) {

for (var i = (arreglo.length-1); i>=0  ; i--) {
	arreglo[i];
	console.log(arreglo[i]);
}

}
printReverse([1,2,3,4]);
*/


/*
function isUniform(arreglo1){
	var compare = arreglo1[0];
	for (var i = 0; i < arreglo1.length; i++) {
		if(arreglo1[i]!== compare){
			return false;
		}	
}
return true;
}
*/


/*
function sumArray(arreglo2){
	var suma=0;
	for (var i = 0; i < arreglo2.length; i++) {
		suma=suma+arreglo2[i];
	}
	return suma;
}
*/


function max(arreglo3){
 var max = arreglo3[0];
 for (var i=1; i<arreglo3.length;i++)
 {
 	if(arreglo3[i]>max)
 	{
 		max= arreglo3[i];
 	}
 }
 return max;
}