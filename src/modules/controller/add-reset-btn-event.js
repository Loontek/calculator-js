import * as elems from "../model/elements.js";
import { resetApp } from "../controller/reset-app.js";

export function addResetBtnEvent() {
	elems.keypadReset.addEventListener('click', () => {
		resetApp();
	});
}