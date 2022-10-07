import './index.html';
import './index.scss';

const store = {
	firstNumber: '',
	secondNumber: '',
	operator: null,
	result: 0,
}

const keypadBtns = document.querySelectorAll('.keypad-small-btn');
const keypadEqual = document.querySelector('.keypad-equal-btn');
const keypadDel = document.querySelector('.keypad-del-btn');
const keypadReset = document.querySelector('.keypad-reset-btn');

const calculatorScreen = document.querySelector('.main-content__screen');

getBtnsValue();

keypadDel.addEventListener('click', () => {
	if (!store.result) {
		if (!store.operator) {
			store.firstNumber = '';
		} else {
			store.secondNumber = '';
		}
		resetScreen();
	}
});

keypadReset.addEventListener('click', () => {
	store.firstNumber = '';
	store.secondNumber = '';
	store.operator = null;
	store.result = 0;
	resetScreen();
});

function resetScreen() {
	calculatorScreen.firstChild.replaceWith('0');
}

function getBtnsValue() {
	for (let btn of keypadBtns) {
		btn.addEventListener('click', (event) => {
			if (event.target.name === '.') {
				setDot();
			} else if (isNaN(+event.target.name)) {
				setOperator(event);
			} else {
				setNumbers(event);
			}
		});
	};
};

function setDot() {
	if (!store.operator) {
		store.firstNumber += '.';
	} else {
		store.secondNumber += '.';
	}
}

function replaceResult() {
	if (store.secondNumber) {
		store.firstNumber = store.result;
	}
	store.secondNumber = '';
}

function setOperator(event) {
	calcResult();
	showResult();
	store.operator = event.target.name;
	replaceResult();
}

function setNumbers(event) {
	if (!store.operator) {
		store.firstNumber += event.target.name;
	} else {
		store.secondNumber += event.target.name;
	}
	showNumbers();
}

function showNumbers() {
	if (!store.operator) {
		calculatorScreen.firstChild.replaceWith(`${store.firstNumber}`);
	} else {
		calculatorScreen.firstChild.replaceWith(`${store.secondNumber}`);
	}
}
function showResult() {
	calculatorScreen.firstChild.replaceWith(`${store.result}`);
}

keypadEqual.addEventListener('click', () => {
	calcResult();
	showResult();
	store.operator = null;
})

function calcResult() {
	switch (store.operator) {
		case '+':
			store.result = +store.firstNumber + +store.secondNumber;
			break;
		case '-':
			store.result = +store.firstNumber - +store.secondNumber;
			break;
		case 'x':
			store.result = +store.firstNumber * +store.secondNumber;
			break;
		case '/':
			store.result = +store.firstNumber / +store.secondNumber;
			break;
		default:
			store.result;
	}
}