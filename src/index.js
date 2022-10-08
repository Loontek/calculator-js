import './index.html';
import './index.scss';

import { toggleTheme } from "./modules/view/toggle-theme.js";
import { getBtnsValue } from "./modules/controller/get-btns-value.js";
import { addDelBtnEvent } from './modules/controller/add-del-btn-event.js';
import { addResetBtnEvent } from './modules/controller/add-reset-btn-event.js';
import { showEqual } from "./modules/view/show-equal.js";
import { getValueFromKeybord } from './modules/controller/get-value-from-keybord.js';

document.addEventListener('DOMContentLoaded', () => {
	toggleTheme();
	getBtnsValue();
	addDelBtnEvent();
	addResetBtnEvent();
	showEqual();
	getValueFromKeybord();
});