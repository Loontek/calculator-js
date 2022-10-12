import store from "../model/store.js";
import * as elems from "../model/elements.js";

export function showResult() {
	elems.calculatorScreen.value = store.result;
}