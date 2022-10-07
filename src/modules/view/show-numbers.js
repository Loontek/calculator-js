import store from "../model/store.js";
import * as elems from "../model/elements.js";

export function showNumbers() {
	if (!store.operator) {
		elems.calculatorScreen.firstChild.replaceWith(`${store.firstNumber}`);
	} else {
		elems.calculatorScreen.firstChild.replaceWith(`${store.secondNumber}`);
	};
}