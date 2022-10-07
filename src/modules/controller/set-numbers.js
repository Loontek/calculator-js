import store from "../model/store.js";
import { showNumbers } from "../view/show-numbers.js";

export function setNumbers(event) {
	if (!store.operator) {
		store.firstNumber += event.target.name;
	} else {
		store.secondNumber += event.target.name;
	};
	showNumbers();
}