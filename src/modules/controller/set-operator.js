import { calcResult } from "./calc-result.js";
import { showResult } from "../view/show-result.js";
import { replaceResult } from "./replace-result.js";
import store from "../model/store.js";

export function setOperator(event) {
	calcResult();
	showResult();
	switch (event.type) {
		case "click":
			store.operator = event.target.name;
			break;
		case "keydown":
			store.operator = event.key;
			break;
	}
	replaceResult();
}