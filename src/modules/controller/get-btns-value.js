import { setDot } from "./set-dot.js";
import { setNumbers } from "./set-numbers.js";
import { setOperator } from "./set-operator.js";
import * as elems from "../model/elements.js";

export function getBtnsValue() {
	for (let btn of elems.keypadBtns) {
		btn.addEventListener('click', (event) => {
			if (event.target.name === '.') {
				setDot();
			} else if (isNaN(+event.target.name)) {
				setOperator(event);
			} else {
				setNumbers(event);
			};
		});
	};
}