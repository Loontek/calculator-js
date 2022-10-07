import store from "../model/store.js";
import * as elems from "../model/elements.js";
import { resetScreen } from "../view/reset-screen.js";

export function resetNumber() {
	elems.keypadDel.addEventListener('click', () => {
		if (!store.result) {
			if (!store.operator) {
				store.firstNumber = '';
			} else {
				store.secondNumber = '';
			}
			resetScreen();
		};
	});
}