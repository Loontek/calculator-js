import * as elems from "../model/elements.js";
import store from "../model/store.js";

export function showInputError() {
	if (store.errors.invalidInput) {
		elems.calculatorScreen.style.outline = '2px solid red';
	} else {
		elems.calculatorScreen.style.outline = 'none';
	}
}