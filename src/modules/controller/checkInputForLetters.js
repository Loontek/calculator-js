import store from "../model/store";
import { showInputError } from "../view/show-input-error.js";

export function checkInputForLetters() {
	if (/[a-zA-Z]/.test(store.inputValue)) {
		console.log(store.inputValue)
		store.errors.invalidInput = true;
		showInputError();
	} else {
		store.errors.invalidInput = false;
		showInputError();
	}
}