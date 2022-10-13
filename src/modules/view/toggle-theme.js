import { setTheme } from "../controller/set-theme.js";
import { showTheme } from "./show-theme.js";
import * as elems from "../model/elements.js";

export function toggleTheme() {
	for (let btn of elems.themeBtns) {
		btn.addEventListener('click', (event) => {
			setTheme(event.target.name);
			showTheme();
		});
	};
}