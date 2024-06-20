const numBtn = document.querySelectorAll('.operand')
const operatorBtn = document.querySelectorAll('.operator')
const clearBtn = document.getElementById('clearBtn');
const negativeBtn = document.getElementById('negativeBtn');
const percentBtn = document.getElementById('percentBtn');
const equalBtn = document.getElementById('equalBtn');
const decimalBtn = document.getElementById('decimalBtn');
const screenNum = document.getElementById('screen');

let firstOperand = "";
let secondOperand = "";
let operator = "";

numBtn.forEach((button)=>{
    button.addEventListener('click',()=>{

        if (firstOperand == "") {
            firstOperand = button.value.toString();
            screenNum.textContent = firstOperand;
        } else if (firstOperand != null && operator == "") {
            firstOperand += button.value.toString();
            screenNum.textContent = firstOperand;
        } else if (secondOperand == "" && operator != "") {
            secondOperand = button.value.toString();
            screenNum.textContent = secondOperand;
        } else {
            secondOperand += button.value.toString();
            screenNum.textContent = secondOperand;
        }

    })
})

operatorBtn.forEach((button)=>{
    button.addEventListener('click',()=>{

        if (firstOperand == "") {
            return;
        } else {
            operator = button.value;
        }
    })
})

equalBtn.addEventListener('click',()=>{
    
    switch (operator) {
        case "plus":
            const plusResult = parseInt(firstOperand) + parseInt(secondOperand);
            screenNum.innerText = plusResult;
            break;
        case "minus":
            const minusResult = parseInt(firstOperand) - parseInt(secondOperand);
            screenNum.innerText = minusResult;
            break;
        case "multiply":
            const multiplyResult = parseInt(firstOperand) * parseInt(secondOperand);
            screenNum.innerText = multiplyResult;
            break;
        default:
            const divideResult = parseInt(firstOperand) / parseInt(secondOperand);
            screenNum.innerText = divideResult;
    }
})

clearBtn.addEventListener('click',()=>{

    screenNum.innerText = "0";
    firstOperand = "";
    secondOperand = "";
    operator = ""

})