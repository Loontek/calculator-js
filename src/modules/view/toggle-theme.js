import * as elems from "../model/elements.js";
import { activateTheme } from "../controller/activate-theme.js";
import { removeTheme } from "../controller/remove-theme.js";

export function toggleTheme() {
	for (let btn of elems.themeBtns) {
		btn.addEventListener('click', (event) => {
			switch (event.target.name) {
				case '1':
					elems.themeBtnIndicator.style.transform = 'translateX(0)';
					removeTheme(2);
					removeTheme(3);
					activateTheme(1);
					break;
				case '2':
					elems.themeBtnIndicator.style.transform = 'translateX(27px)';
					removeTheme(1);
					removeTheme(3);
					activateTheme(2);
					break;
				case '3':
					elems.themeBtnIndicator.style.transform = 'translateX(54px)';
					removeTheme(1);
					removeTheme(2);
					activateTheme(3);
					break;
			};
		});
	};
}