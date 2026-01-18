const buttons= document.querySelectorAll('button');
const display = document.querySelector('.display');

let firstNumber = '';
let operator = '';
let secondNumber = '';

buttons.forEach(button => {

   button.addEventListener('click',() => {

    var value= button.textContent;

           if (!isNaN(value) || value === '.') {
                if (operator === '') {
                    firstNumber += value;
                    display.textContent = firstNumber;
                } else {
                    secondNumber += value;
                     display.textContent = firstNumber + ' ' + operator + ' ' + secondNumber;
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
            display.textContent = firstNumber + ' ' + operator;
            }
            else if (value === '=') {
            let result;

        switch (operator) {
            case '+':
            result = Number(firstNumber) + Number(secondNumber);
            break;
            case '-':
            result = Number(firstNumber) - Number(secondNumber);
            break;
            case '*':
            result = Number(firstNumber) * Number(secondNumber);
            break;
            case '/':
            result = Number(firstNumber) / Number(secondNumber);
            break;
            default:
            return;
        }

         display.textContent = result;
            firstNumber = result.toString();
            secondNumber = '';
            operator = '';
    } 
          else if (value === 'C') {
      firstNumber = '';
      secondNumber = '';
      operator = '';
      display.textContent = '0';
    } 
});

}) ;


