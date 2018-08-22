function getClosestToZero(){
	let array = [...arguments].reduce(function(first, second){
		return Math.abs(second) < Math.abs(first) ? second : first;
	});return array;
}