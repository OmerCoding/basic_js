function add (p1, p2) {
	return p1 + p2;
}

function subtract (p1 ,p2) {
	return p1 - p2;
}

function sum (arr) {
	let sumArr = 0
	for (let i = 0; i < arr.length; i++){
		sumArr += arr[i];
	}
	return sumArr;
}

function multiply (arr) {
	let mult = 1;
	for (let i = 0; i < arr.length; i++){
		mult *= arr[i];
	}
	return mult;
}

function power(p1, p2) {
	return Math.pow(p1, p2);
}

function factorial(p1) {
	let fac = 1, num = p1;
	while (num > 0) {
		fac *= num;
		num--;
	}
	return fac;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
