const store = {
	firstNumber: '',
	secondNumber: '',
	operator: null,
	result: 0,
	keypadNumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
	keypadOperators: ['+', '-', '*', '/'],
	themes: [1, 2, 3],
	activeTheme: 1,
	inputValue: '', // '23+4/5*7-8/7'
};

// const input = document.querySelector('#input');

// input.addEventListener('input', (event) => {
// 	store.inputValue = store.inputValue + value;
// })

// function calcResult() {
// 	const numbers = [{ value: '23', index: 0 }];
// 	const operators = [{ value: '+', index: 1 }];

// 	store.inputValue.split('').forEach((elem, index, self) => {
// 		if (elem = '-', elem = '+', elem = '/', elem = '*') {
// 			operators.push(elem)

// 			const str = self.splice(0, index - 1);
// 			numbers.push(+str)
// 		}
// 	})
// }

export default store;