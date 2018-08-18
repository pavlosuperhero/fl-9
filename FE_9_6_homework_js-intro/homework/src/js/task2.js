// Your code goes here
const	sideA = Number(parseFloat(prompt('Enter first side lenght')));
const	sideB = Number(parseFloat(prompt('Enter second side lenght')));
const	angleBetween = Number(parseFloat(prompt('Enter angle between')));
const maxAngle = 180;

function toRadia(angle){
return angle / maxAngle * Math.PI; 
}

function consoleOut(value){
	console.log(value);	
}
(function	tCalc() {
	let tSqrt;
	let tPerm;
	let sideC;

	if(sideA < 0 || sideB < 0 || angleBetween < 0 || angleBetween > maxAngle){
		consoleOut('Invalid data');
	}else if (sideA && sideB && angleBetween){
		sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2) - 
			2 * sideA * sideB * Math.cos(toRadia(angleBetween)));
		tPerm = Number(sideA) + Number(sideB) + Number(sideC);
		tSqrt = Math.sqrt(tPerm / 2 * ((tPerm / 2 - sideA) * (tPerm / 2 - sideB) * (tPerm / 2 - sideC)));
		sideC = sideC % 1 === 0 ? sideC.toFixed(0) : sideC.toFixed(2);
		tSqrt = tSqrt % 1 === 0 ? tSqrt.toFixed(0) : tSqrt.toFixed(2);
		tPerm = tPerm % 1 === 0 ? tPerm.toFixed(0) : tPerm.toFixed(2);
		if(sideC === 0 || tSqrt === 0 || tPerm === 0){
			consoleOut('Invalid data');
		}else{
		consoleOut('c lenght: ' + sideC + '\n');
		consoleOut('Triangle square: ' + tSqrt + '\n');
		consoleOut('Triangle perimeter: ' + tPerm + '\n');
		}
	}else{
		consoleOut('Invalid data');
	}
})();
