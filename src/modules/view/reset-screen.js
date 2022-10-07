import * as elems from "../model/elements.js";

export function resetScreen() {
	elems.calculatorScreen.firstChild.replaceWith('0');
}