import store from "../model/store";

export function calcResult() {
	switch (store.operator) {
		case '+':
			if (store.firstNumber.includes('.') && store.secondNumber.includes('.')) {
				store.result = (+store.firstNumber * 10000 + +store.secondNumber * 10000) / 10000;
			} else {
				store.result = +store.firstNumber + +store.secondNumber;
			}
			break;
		case '-':
			if (store.firstNumber.includes('.') && store.secondNumber.includes('.')) {
				store.result = (+store.firstNumber * 10000 - +store.secondNumber * 10000) / 10000;
			} else {
				store.result = +store.firstNumber - +store.secondNumber;
			}
			break;
		case 'x':
			if (store.firstNumber.includes('.') && store.secondNumber.includes('.')) {
				store.result = (+store.firstNumber * 10000) * (+store.secondNumber * 10000) / 100000000;
			} else {
				store.result = +store.firstNumber * +store.secondNumber;
			}
			break;
		case '*':
			if (store.firstNumber.includes('.') && store.secondNumber.includes('.')) {
				store.result = (+store.firstNumber * 10000) * (+store.secondNumber * 10000) / 100000000;
			} else {
				store.result = +store.firstNumber * +store.secondNumber;
			}
			break;
		case '/':
			if (store.firstNumber.includes('.') && store.secondNumber.includes('.')) {
				store.result = (+store.firstNumber * 10000) / (+store.secondNumber * 10000);
			} else {
				store.result = +store.firstNumber / +store.secondNumber;
			}
			break;
		default:
			store.result;
	};
}