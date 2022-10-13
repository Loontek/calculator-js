import * as elems from "../model/elements.js";

export function resetScreen() {
	elems.calculatorInput.value = '0';
	elems.calculatorExpression.style.display = 'none';
	elems.calculatorScreen.style.padding = '30px 25px';
}