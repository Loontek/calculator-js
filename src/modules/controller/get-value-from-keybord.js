import store from "../model/store.js";
import { setNumbers } from "./set-numbers.js";
import { setDot } from "./set-dot.js";
import { setOperator } from "./set-operator.js";
import { resetApp } from "./reset-app.js";
import { resetNumber } from "./reset-number.js";
import { calcResult } from './calc-result.js';
import { showResult } from '../view/show-result.js';

export function getValueFromKeybord() {
	document.addEventListener('keydown', (event) => {
		store.keypadNumbers.forEach(elem => {
			if (+event.key === elem) {
				setNumbers(event);
			};
		});
		store.keypadOperators.forEach(elem => {
			if (event.key === elem) {
				setOperator(event);
			};
		});
		switch (event.key) {
			case 'Delete':
				resetApp();
				break;
			case 'Backspace':
				resetNumber();
				break;
			case '.':
				setDot();
				break;
			case 'Enter':
				calcResult();
				showResult();
				break;

		};
	});
}