function isEven(numero){
	if(numero%2===0){
		return true;
	}
	else{
		return false;
	}
}
isEven(333);


function factorial(num)
{
	var result=1;
	for (var i =1; i<=num; i++){
		result*=i;
	}
	return result;
}



function kab(str){
	var newStr=str.replace(/-/g,"_");
	return newStr;
}