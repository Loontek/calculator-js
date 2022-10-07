import { calcResult } from "./calc-result.js";
import { showResult } from "../view/show-result.js";
import { replaceResult } from "./replace-result.js";
import store from "../model/store.js";

export function setOperator(event) {
	calcResult();
	showResult();
	store.operator = event.target.name;
	replaceResult();
}