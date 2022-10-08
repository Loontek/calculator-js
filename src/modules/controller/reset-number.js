import store from "../model/store.js";
import { resetScreen } from "../view/reset-screen.js";

export function resetNumber() {
	if (!store.result) {
		if (!store.operator) {
			store.firstNumber = '';
		} else {
			store.secondNumber = '';
		}
		resetScreen();
	};
}