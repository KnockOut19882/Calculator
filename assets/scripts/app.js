const defaultResult = 0;

let currentResult = defaultResult;

function getUserInput () {
  return parseInt(userInput.value);
}

function add(num1, num2) {
  const enteredNumber = getUserInput();
  const calcDescription = `${currentResult} + ${enteredNumber}`
  currentResult += parseInt(enteredNumber); 
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);


