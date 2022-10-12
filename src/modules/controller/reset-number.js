import store from "../model/store.js";
import { showInput } from "../view/show-input.js";

export function resetNumber() {
	store.inputValue = store.inputValue.slice(0, [store.inputValue.length - 1]);
	showInput();
}