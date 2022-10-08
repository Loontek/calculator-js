import * as elems from "../model/elements.js";
import { resetNumber } from "../controller/reset-number.js";

export function addDelBtnEvent() {
	elems.keypadDel.addEventListener('click', () => {
		resetNumber();
	});
}