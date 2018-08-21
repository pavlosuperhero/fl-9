// Your code goes here
const max = 5;
const price = 10;
const first = 1;
const second = 2;
const third = 3;
/*		Generator	*/
function	generator(number, times){
	if(times === 0){
		let generated = Math.floor(Math.random() * max);
		return generated;
	}else{
		let generated = Math.floor(Math.random() * (max * times));
		return generated;
	}
}

/*		Money calculator	*/
function	calculate(i, money, max, round, triple){
	if(i === 3){
		if(round === first){
			return price	
		}else if(round === second){
			return price * triple;
		}else{
			return price * (triple + triple)
		}
	}else if(i === second){
		if(round === first){
			return price - max	
		}else if(round === second){
			return(price - max) * triple;
		}else{
			return(price - max) * (triple + triple)
		}
	}else{
		if(round === first){
			return price / max	
		}else if(round === second){
			return price / max * triple;
		}else{
			return price / max * (triple + triple)
		}
	}
}

/*		Player monitor	*/
function	inputNumber(max, i, money, round, double, triple){
	let s;
	if(round === first){
		s = first;
		money = 0;
	}else if(round === third){
		s = third;
	}else if(round === double){
		s = double;
	}
	let range = 'Enter a number from 0 to' + max * s + '\n';
	let att = 'Attempts left: ' + i + '\n';
	let moneyHolding = 'Total price: ' + money + '\n';
	let poss = 'Possible price on current attempt: ' + calculate(i, money, max, round, triple) + '\n';
	let number = Number(window.prompt(range + att+ moneyHolding + poss));
	return number;
}

/*		Core	*/
function playTheGame(){
	let money = price;
	let mashineNumber = generator(0, 0);
	console.log(mashineNumber);
	let round = 1;
	let messege = 'Thank you for a game. Your prize is: ';
	let greatMessage = 'Congratulation!   Your prize is:' + money + '$';
	let playAgainMessege = 'Do you want to play again?';
	let continueMessage = 'Do you want to continue?';
	let double = 2;
	let triple = 3;

	for(let i = 3; i > 0; i--){
		if(round < 4){
			let userNumber = inputNumber(max, i, money, round, double, triple);
			console.log(userNumber);
			
			if(round === 4){
				alert(messege + money + '$');
				if(confirm(playAgainMessege) === true){
					i = 4;
					round = first;
					money = price;
				}else{
					break;
				}
			}else if(i === 0){
				alert(messege + money + '$');
				if(confirm(playAgainMessege) === true){
					i = 4;
					round = first;
					money = price;
				}else{
					break;
				}
			}else if(userNumber === mashineNumber){
				if(i === 3){
					if(round === first){
						money = price;	
					}else if(round === second){
						money = money + price * triple;
					}else{
						money = money + price * (triple + triple);
					}
				}else if(i === second){
					if(round === first){
						money = price - max;	
					}else if(round === second){
						money = money + (price - max) * triple;
					}else{
						money = money + (price - max) * (triple + triple);
					}
				}else{
					if(round === first){
						money = price / max;	
					}else if(round === second){
						money = money + price / max * triple;
					}else{
						money = money + price / max * (triple + triple);
					}
				}
				alert(greatMessage);
				if(confirm(continueMessage) === true){
					i = 4;
					mashineNumber = generator(0, double);
					console.log(mashineNumber);
					round++;	
				}else{
					alert(messege + money + '$');
					break;
				}
			}
		}else{
			alert(messege + money + '$');
			if(confirm(playAgainMessege) === true){
				i = 4;
				round = first;
				money = price;
			}else{
				break;
			}
		}
	}
}

		/****		Start 	*****/
(function	gameRandomNumber(){
	let accept = +confirm('Do you want to play a game?');
	if(accept === false || accept === 0){
		alert('You did not become a millionaire, but can.');
	}else{
		playTheGame();
	}
})();
