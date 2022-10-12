import store from "../model/store.js";
import * as elems from "../model/elements.js";
import { resetScreen } from "./reset-screen.js";

export function showInput() {
	if (store.inputValue === '') {
		resetScreen();
	} else {
		elems.calculatorScreen.value = store.inputValue;
	}
}