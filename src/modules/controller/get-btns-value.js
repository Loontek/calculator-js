import * as elems from "../model/elements.js";
import store from "../model/store.js";
import { showInput } from "../view/show-input.js";

export function getBtnsValue() {
	for (let btn of elems.keypadBtns) {
		btn.addEventListener('click', (event) => {
			if (event.target.name === 'x') {
				store.inputValue += '*';
			} else {
				store.inputValue += event.target.name;
			}
			showInput();
		});
	};
}