const defaultResult = 0;

let currentResult = defaultResult;

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add(num1, num2) {
  const enteredNumber = getUserInput();
  const initialNumber = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialNumber, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialNumber = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialNumber, enteredNumber);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialNumber = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialNumber, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialNumber = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialNumber, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
divideBtn.addEventListener("click", divide);
multiplyBtn.addEventListener("click", multiply);
