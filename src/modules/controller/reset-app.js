import store from "../model/store.js";
import { resetScreen } from "../view/reset-screen";

export function resetApp() {
	store.inputValue = '';
	store.result = 0;
	store.errors.invalidInput = false;
	resetScreen();
}