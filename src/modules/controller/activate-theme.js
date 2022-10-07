import * as elems from "../model/elements.js";

export function activateTheme(number) {
	elems.body.classList.add(`body_theme${number}`);
	elems.header.classList.add(`header_theme${number}`);
	elems.themeButtonsContainer.classList.add(`theme-changer__buttons_theme${number}`);
	for (let btn of elems.themeBtns) {
		btn.classList.add(`theme-changer__btn_theme${number}`);
	};
	elems.themeBtnIndicator.classList.add(`theme-changer__indicator_theme${number}`);
	elems.calculatorScreen.classList.add(`main-content__screen_theme${number}`);
	elems.keypad.classList.add(`keypad_theme${number}`);
	for (let btn of elems.keypadBtns) {
		btn.classList.add(`keypad-small-btn_theme${number}`);
	};
	elems.keypadDel.classList.add(`keypad-del-btn_theme${number}`);
	elems.keypadReset.classList.add(`keypad-reset-btn_theme${number}`);
	elems.keypadEqual.classList.add(`keypad-equal-btn_theme${number}`);
}