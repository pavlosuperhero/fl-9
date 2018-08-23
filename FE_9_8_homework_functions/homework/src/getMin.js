
function getMin(){
	let array = [...arguments];
	
    for (let i = 1; i < array.length; i++){
        if(array[i-1] > array[i]) {
			stepBack(i, array);
		}
	}
	function stepBack(i, array){
        for( ; i > 0 && array[i-1] > array[i]; i--){
            let swap = array[i];
            array[i] = array[i-1];
            array[i-1] = swap;
        }
	}
    return array[0];
}