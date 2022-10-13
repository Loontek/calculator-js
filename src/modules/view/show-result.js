import store from "../model/store.js";
import * as elems from "../model/elements.js";

export function showResult() {
	elems.calculatorExpression.style.display = 'block';
	elems.calculatorScreen.style.padding = '15px 25px';
	elems.calculatorExpression.firstChild.replaceWith(store.inputValue);
	elems.calculatorInput.value = store.result;
}