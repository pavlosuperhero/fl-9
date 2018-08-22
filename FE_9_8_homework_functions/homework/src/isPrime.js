// Your code goes here

function isPrime(number){
	let i = 2;
	
	for(; i < number;){
		if(number % i === 0){
			return false;
		}
		i++;
	}
	return true;
}	