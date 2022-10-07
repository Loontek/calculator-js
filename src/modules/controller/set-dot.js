import store from "../model/store.js";

export function setDot() {
	if (!store.operator) {
		store.firstNumber += '.';
	} else {
		store.secondNumber += '.';
	};
}