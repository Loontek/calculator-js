import store from "../model/store.js";
import { calcResult } from "./calc-result.js";
import { showResult } from "../view/show-result.js";
import * as elems from "../model/elements.js";
import { checkInputForLetters } from "./checkInputForLetters.js";

export function getValueFromKeybord() {
	elems.calculatorInput.onfocus = function () {
		if (store.inputValue === '') {
			elems.calculatorInput.value = '';
		};
	};

	elems.calculatorInput.onblur = function () {
		if (store.inputValue === '') {
			elems.calculatorInput.value = '0';
		};
	};

	elems.calculatorInput.addEventListener('input', (event) => {
		store.inputValue = event.target.value;
		elems.calculatorExpression.style.display = 'none';
		elems.calculatorScreen.style.padding = '30px 25px';
		checkInputForLetters();
	});

	document.addEventListener('keydown', (event) => {
		switch (event.key) {
			case 'Delete':
				store.inputValue = '';
				store.result = 0;
				elems.calculatorInput.value = '';
				elems.calculatorExpression.style.display = 'none';
				elems.calculatorScreen.style.padding = '30px 25px';
				break;
			case 'Enter':
				calcResult();
				showResult();
				store.inputValue = store.result;
				break;
		};
	});
}