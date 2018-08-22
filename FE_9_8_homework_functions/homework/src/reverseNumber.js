function	reverseNumber(numbers){
	let		array = Math.abs([...arguments]);
	
	array = (''+array).split('').reverse().join('');

	return numbers < 0 ? array * Math.sign(numbers) : array * 1;
}