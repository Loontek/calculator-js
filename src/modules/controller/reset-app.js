import store from "../model/store.js";
import { resetScreen } from "../view/reset-screen";

export function resetApp() {
	store.firstNumber = '';
	store.secondNumber = '';
	store.operator = null;
	store.result = 0;
	resetScreen();
}