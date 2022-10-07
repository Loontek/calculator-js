import store from "../model/store";

export function replaceResult() {
	if (store.secondNumber) {
		store.firstNumber = store.result;
	};
	store.secondNumber = '';
}