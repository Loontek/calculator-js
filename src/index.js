import './index.html';
import './index.scss';

const store = {
	firstNumber: '',
	secondNumber: '',
	operator: null,
	result: 0,
}

const keypad = document.querySelector('.keypad');
const keypadBtns = document.querySelectorAll('.keypad-small-btn');
const keypadEqual = document.querySelector('.keypad-equal-btn');
const keypadDel = document.querySelector('.keypad-del-btn');
const keypadReset = document.querySelector('.keypad-reset-btn');

const calculatorScreen = document.querySelector('.main-content__screen');

const themeButtonsContainer = document.querySelector('.theme-changer__buttons');
const themeBtns = document.querySelectorAll('.theme-changer__btn');
const themeBtnIndicator = document.querySelector('.theme-changer__indicator');
const header = document.querySelector('.header');
const body = document.querySelector('.body');

console.log(themeBtns);

for (let btn of themeBtns) {
	btn.addEventListener('click', (event) => {
		// console.log(event.target.name);
		switch (event.target.name) {
			case '1':
				// console.log('work');
				themeBtnIndicator.style.transform = 'translateX(0)';
				removeTheme(2);
				removeTheme(3);
				activateTheme(1);
				break;
			case '2':
				// console.log('work');
				themeBtnIndicator.style.transform = 'translateX(27px)';
				removeTheme(1);
				removeTheme(3);
				activateTheme(2);
				break;
			case '3':
				// console.log('work');
				themeBtnIndicator.style.transform = 'translateX(54px)';
				removeTheme(1);
				removeTheme(2);
				activateTheme(3);
				break;
		}
	})
};

function activateTheme(number) {
	body.classList.add(`body_theme${number}`);
	header.classList.add(`header_theme${number}`);
	themeButtonsContainer.classList.add(`theme-changer__buttons_theme${number}`);
	for (let btn of themeBtns) {
		btn.classList.add(`theme-changer__btn_theme${number}`);
	};
	themeBtnIndicator.classList.add(`theme-changer__indicator_theme${number}`);
	calculatorScreen.classList.add(`main-content__screen_theme${number}`);
	keypad.classList.add(`keypad_theme${number}`);
	for (let btn of keypadBtns) {
		btn.classList.add(`keypad-small-btn_theme${number}`);
	};
	keypadDel.classList.add(`keypad-del-btn_theme${number}`);
	keypadReset.classList.add(`keypad-reset-btn_theme${number}`);
	keypadEqual.classList.add(`keypad-equal-btn_theme${number}`);
}

function removeTheme(number) {
	body.classList.remove(`body_theme${number}`);
	header.classList.remove(`header_theme${number}`);
	themeButtonsContainer.classList.remove(`theme-changer__buttons_theme${number}`);
	for (let btn of themeBtns) {
		btn.classList.remove(`theme-changer__btn_theme${number}`);
	};
	themeBtnIndicator.classList.remove(`theme-changer__indicator_theme${number}`);
	calculatorScreen.classList.remove(`main-content__screen_theme${number}`);
	keypad.classList.remove(`keypad_theme${number}`);
	for (let btn of keypadBtns) {
		btn.classList.remove(`keypad-small-btn_theme${number}`);
	};
	keypadDel.classList.remove(`keypad-del-btn_theme${number}`);
	keypadReset.classList.remove(`keypad-reset-btn_theme${number}`);
	keypadEqual.classList.remove(`keypad-equal-btn_theme${number}`);
}











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