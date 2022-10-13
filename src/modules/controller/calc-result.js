import store from "../model/store";
import NP from 'number-precision';

export function calcResult() {
	let expression = {
		numbers: store.inputValue.split(/[\-\+\x\*\/]/),
		operators: splitOperators(store.inputValue),
	};

	expression = checkNegativeNumbers(expression);
	expression = divide(expression);
	expression = multi(expression);
	expression = minus(expression);
	expression = plus(expression);

	store.result = expression.numbers[0] + '';
}

function splitOperators(str) {
	const operators = [];
	str.split('').forEach(elem => {
		if (isNaN(+elem) && elem !== '.') {
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

function divide(expression) {
	const localExpression = JSON.parse(JSON.stringify(expression));

	for (let i = 0; i < localExpression.numbers.length; i++) {
		localExpression.operators.forEach((elem, index) => {
			if (elem === '/') {
				localExpression.numbers[index] = NP.divide(localExpression.numbers[index], localExpression.numbers[index + 1]);
				localExpression.numbers.splice(index + 1, 1);
				localExpression.operators.splice(index, 1);
			}
		});
	};

	return localExpression;
}

function multi(expression) {
	const localExpression = JSON.parse(JSON.stringify(expression));

	for (let i = 0; i < localExpression.numbers.length; i++) {
		localExpression.operators.forEach((elem, index) => {
			if (elem === '*') {
				localExpression.numbers[index] = NP.times(localExpression.numbers[index], localExpression.numbers[index + 1]);
				localExpression.numbers.splice(index + 1, 1);
				localExpression.operators.splice(index, 1);
			}
		});
	};

	return localExpression;
}

function plus(expression) {
	const localExpression = JSON.parse(JSON.stringify(expression));

	for (let i = 0; i < localExpression.numbers.length; i++) {
		localExpression.operators.forEach((elem, index) => {
			if (elem === '+') {
				localExpression.numbers[index] = NP.plus(localExpression.numbers[index], localExpression.numbers[index + 1]);
				localExpression.numbers.splice(index + 1, 1);
				localExpression.operators.splice(index, 1);
			}
		});
	};

	return localExpression;
}
function minus(expression) {
	const localExpression = JSON.parse(JSON.stringify(expression));

	for (let i = 0; i < localExpression.numbers.length; i++) {
		localExpression.operators.forEach((elem, index) => {
			if (elem === '-') {
				localExpression.numbers[index] = NP.minus(localExpression.numbers[index], localExpression.numbers[index + 1]);
				localExpression.numbers.splice(index + 1, 1);
				localExpression.operators.splice(index, 1);
			}
		});
	};

	return localExpression;
}