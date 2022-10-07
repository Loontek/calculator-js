import * as elems from "../model/elements.js";

export function removeTheme(number) {
	elems.body.classList.remove(`body_theme${number}`);
	elems.header.classList.remove(`header_theme${number}`);
	elems.themeButtonsContainer.classList.remove(`theme-changer__buttons_theme${number}`);
	for (let btn of elems.themeBtns) {
		btn.classList.remove(`theme-changer__btn_theme${number}`);
	};
	elems.themeBtnIndicator.classList.remove(`theme-changer__indicator_theme${number}`);
	elems.calculatorScreen.classList.remove(`main-content__screen_theme${number}`);
	elems.keypad.classList.remove(`keypad_theme${number}`);
	for (let btn of elems.keypadBtns) {
		btn.classList.remove(`keypad-small-btn_theme${number}`);
	};
	elems.keypadDel.classList.remove(`keypad-del-btn_theme${number}`);
	elems.keypadReset.classList.remove(`keypad-reset-btn_theme${number}`);
	elems.keypadEqual.classList.remove(`keypad-equal-btn_theme${number}`);
}