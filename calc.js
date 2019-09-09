const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null
};

//update display to show 0
function updateDisplay() {
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
}

updateDisplay();

//add keys event listener
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  const {
    target
  } = event;
  if(!target.matches('button')){
    return;
  }

  if(target.classList.contains('operator')){
    console.log('operatro', target.value);
    return;
  }

  if(target.classList.contains('decimal')){
    console.log('decimal', target.value);
    return;
  }
  
  inputDigit(target.value);
  updateDisplay();
});

//input the digits
function inputDigit(digit){
  const{
    displayValue
  } = calculator;
  //overwrite 'displayValue' if the current value is '0' 
  calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}