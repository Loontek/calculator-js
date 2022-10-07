import store from "../model/store";

export function calcResult() {
	switch (store.operator) {
		case '+':
			store.result = +store.firstNumber + +store.secondNumber;
			break;
		case '-':
			store.result = +store.firstNumber - +store.secondNumber;
			break;
		case 'x':
			store.result = +store.firstNumber * +store.secondNumber;
			break;
		case '/':
			store.result = +store.firstNumber / +store.secondNumber;
			break;
		default:
			store.result;
	};
}