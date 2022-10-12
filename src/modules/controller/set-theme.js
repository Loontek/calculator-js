import store from "../model/store.js";
import * as elems from "../model/elements.js";

export function setTheme() {
	for (let btn of elems.themeBtns) {
		btn.addEventListener('click', (event) => {
			store.activeTheme = event.target.name;
		});
	};
}