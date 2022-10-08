import store from "../model/store.js";
import { showNumbers } from "../view/show-numbers.js";

export function setNumbers(event) {
	switch (event.type) {
		case "click":
			if (!store.operator) {
				store.firstNumber += event.target.name;
			} else {
				store.secondNumber += event.target.name;
			};
			break;
		case "keydown":
			if (!store.operator) {
				store.firstNumber += event.key;
			} else {
				store.secondNumber += event.key;
			};
			break;
	}
	showNumbers();
}