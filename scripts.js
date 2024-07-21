
let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = null;
const colors = ['#4CAF50', '#FF4D4D', '#FFCA28', '#29B6F6', '#AB47BC'];

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation;
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

function updateDisplay() {
    display.value = currentOperand;
}

function changeColor() {
    const calculator = document.querySelector('.calculator');
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    calculator.style.backgroundColor = randomColor;
}

setInterval(changeColor, 10000);
