import { calcResult } from "../controller/calc-result.js";
import { showResult } from "./show-result.js";
import store from "../model/store.js";
import * as elems from "../model/elements.js"

export function showEqual() {
	elems.keypadEqual.addEventListener('click', () => {
		calcResult();
		showResult();
		store.operator = null;
	});
}