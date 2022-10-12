import store from "../model/store";
import NP from 'number-precision';

export function calcResult() {
	let expression = {
		numbers: store.inputValue.split(/[\-\+\*\/]/),
		operators: splitOperators(store.inputValue),
	};

	expression = checkNegativeNumbers(expression);
	expression = multAndDevide(expression);
	expression = plusAndMinus(expression);

	return expression;
}

function splitOperators(str) {
	const operators = [];
	str.split('').forEach(elem => {
		if (isNaN(+elem) && elem !== '.' && elem !== '(' && elem !== ')') {
			operators.push(elem);
		};
	});

	return operators;
};

function checkNegativeNumbers(expression) {
	const localExpression = JSON.parse(JSON.stringify(expression));

	localExpression.numbers.forEach((elem, index) => {
		if (elem === '') {
			localExpression.numbers[index + 1] = -(+localExpression.numbers[index + 1]) + '';
			localExpression.numbers.splice(index, 1);
			localExpression.operators.splice(index, 1);
		};
	});

	return localExpression;
};

function multAndDevide(expression) {
	const localExpression = JSON.parse(JSON.stringify(expression));

	for (let i = 0; i < localExpression.numbers.length; i++) {
		localExpression.operators.forEach((elem, index) => {
			if (elem === '/' || elem === '*') {
				switch (elem) {
					case '*':
						localExpression.numbers[index] = NP.times(localExpression.numbers[index], localExpression.numbers[index + 1]);
						localExpression.numbers.splice(index + 1, 1);
						localExpression.operators.splice(index, 1);
						break;
					case '/':
						localExpression.numbers[index] = NP.divide(localExpression.numbers[index], localExpression.numbers[index + 1]);
						localExpression.numbers.splice(index + 1, 1);
						localExpression.operators.splice(index, 1);
						break;
				}
			}
		});
	};

	return localExpression;
};

function plusAndMinus(expression) {
	const localExpression = JSON.parse(JSON.stringify(expression));

	for (let i = 0; i < localExpression.numbers.length; i++) {
		localExpression.operators.forEach((elem, index) => {
			if (elem === '+' || elem === '-') {
				switch (elem) {
					case '+':
						localExpression.numbers[index] = NP.plus(localExpression.numbers[index], localExpression.numbers[index + 1]);
						localExpression.numbers.splice(index + 1, 1);
						localExpression.operators.splice(index, 1);
						break;
					case '-':
						localExpression.numbers[index] = NP.minus(localExpression.numbers[index], localExpression.numbers[index + 1]);
						localExpression.numbers.splice(index + 1, 1);
						localExpression.operators.splice(index, 1);
						break;
				}
			}
		});
	};

	return localExpression;
};

// console.log(calcResult('20+20*20/5'));
// console.log(calcResult('50*20-50*2+300/6'));
// console.log(calcResult('25.50*6-65*3'));
// console.log(calcResult('7*-9-9*5'));
// console.log(calcResult('56*2+-65*23*-32'));
// console.log(calcResult('23.58*32-65/4*-5'));
// console.log(calcResult('0.1+-0.2'));
// console.log(calcResult('0.1+0.2'));
// console.log(calcResult('1-0.9'));
// console.log(calcResult('3*0.3'));
// console.log(calcResult('1.21/1.1'));

// export function calcResult() {
// 	switch (store.operator) {
// 		case '+':
// 			if (store.firstNumber.includes('.') && store.secondNumber.includes('.')) {
// 				store.result = (+store.firstNumber * 10000 + +store.secondNumber * 10000) / 10000;
// 			} else {
// 				store.result = +store.firstNumber + +store.secondNumber;
// 			}
// 			break;
// 		case '-':
// 			if (store.firstNumber.includes('.') && store.secondNumber.includes('.')) {
// 				store.result = (+store.firstNumber * 10000 - +store.secondNumber * 10000) / 10000;
// 			} else {
// 				store.result = +store.firstNumber - +store.secondNumber;
// 			}
// 			break;
// 		case 'x':
// 			if (store.firstNumber.includes('.') && store.secondNumber.includes('.')) {
// 				store.result = (+store.firstNumber * 10000) * (+store.secondNumber * 10000) / 100000000;
// 			} else {
// 				store.result = +store.firstNumber * +store.secondNumber;
// 			}
// 			break;
// 		case '*':
// 			if (store.firstNumber.includes('.') && store.secondNumber.includes('.')) {
// 				store.result = (+store.firstNumber * 10000) * (+store.secondNumber * 10000) / 100000000;
// 			} else {
// 				store.result = +store.firstNumber * +store.secondNumber;
// 			}
// 			break;
// 		case '/':
// 			if (store.firstNumber.includes('.') && store.secondNumber.includes('.')) {
// 				store.result = (+store.firstNumber * 10000) / (+store.secondNumber * 10000);
// 			} else {
// 				store.result = +store.firstNumber / +store.secondNumber;
// 			}
// 			break;
// 		default:
// 			store.result;
// 	};
// }