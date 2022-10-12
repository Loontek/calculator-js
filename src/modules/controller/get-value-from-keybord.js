import store from "../model/store.js";
import { calcResult } from "./calc-result.js";
import { showResult } from "../view/show-result.js";
import * as elems from "../model/elements.js";

export function getValueFromKeybord() {
	elems.calculatorScreen.onfocus = function () {
		if (store.inputValue === '') {
			elems.calculatorScreen.value = '';
		};
	};

	elems.calculatorScreen.onblur = function () {
		if (store.inputValue === '') {
			elems.calculatorScreen.value = '0';
		};
	};

	elems.calculatorScreen.addEventListener('input', (event) => {
		store.inputValue = event.target.value;
	});
	document.addEventListener('keydown', (event) => {
		switch (event.key) {
			case 'Delete':
				store.inputValue = '';
				store.result = 0;
				elems.calculatorScreen.value = '';
				break;
			case 'Enter':
				calcResult();
				showResult();
				store.inputValue = store.result;
				break;
		};
	});
}