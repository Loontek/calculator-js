import store from "../model/store.js";
import * as elems from "../model/elements.js";
import { resetScreen } from "../view/reset-screen";

export function resetApp() {
	elems.keypadReset.addEventListener('click', () => {
		store.firstNumber = '';
		store.secondNumber = '';
		store.operator = null;
		store.result = 0;
		resetScreen();
	});
}