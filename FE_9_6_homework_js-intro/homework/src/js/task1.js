// Your code goes here
const forDisc = 100;
const x = -1;
(function discountCalculator(){
	let userMoney = Number(prompt('Enter amount of money!').replace(/\D+/g,''));
	let userDiscount = Number(prompt('Enter your personal discount').replace(/[a-z]/g,'')
		.replace(/[A-Z]/g,'')).toFixed(2);
	let afterDiscount = userMoney * (userDiscount / forDisc);
	let valueDiscount = userMoney - afterDiscount;
	let answer;
	let	answerFalse = 'Invalid data';
	let answerTrueInt = 'Price with out discount: ' + userMoney + 
		'\n' + 'Discount: ' + Number(userDiscount).toFixed() + '%' + '\n' 
		+ 'Price with discount: ' + valueDiscount 
		+ '\n' + 'Saved: ' + afterDiscount;
	let answerTrueFloat = 'Price with out discount: ' + userMoney + 
		'\n' + 'Discount: ' + Number(userDiscount).toFixed() + '%' + '\n' 
		+ 'Price with discount: ' + valueDiscount.toFixed(2)
		+ '\n' + 'Saved: ' + afterDiscount.toFixed(2);
	
	if(userDiscount === isNaN){ 
		answer = answerFalse; 
	} else if(userMoney === isNaN){
		answer = answerFalse; 
	} else if(userDiscount < x){ 
		answer = answerFalse; 
	} else if(userMoney < 0){
		answer = answerFalse; 
	} else if(userDiscount > 100){ 
		answer = answerFalse; 
	} else if(afterDiscount % 1 === 0){ 
		answer = answerTrueInt; 
	} else if(valueDiscount % 1 === 0){
		answer = answerTrueInt; 
	} else if(afterDiscount % 1 !== 0){ 
		answer = answerTrueFloat; 
	} else if(valueDiscount % 1 !== 0){ 
		answer = answerTrueFloat; 
	}
	console.log(answer);
})();
