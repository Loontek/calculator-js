import './index.html';
import './index.scss';

import { toggleTheme } from "./modules/view/toggle-theme.js";
import { getBtnsValue } from "./modules/controller/get-btns-value.js";
import { resetNumber } from "./modules/controller/reset-number.js";
import { resetApp } from "./modules/controller/reset-app.js";
import { showEqual } from "./modules/view/show-equal.js";


document.addEventListener('DOMContentLoaded', () => {
	toggleTheme();
	getBtnsValue();
	resetNumber();
	resetApp();
	showEqual();
});