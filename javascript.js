const numBtn = document.querySelectorAll('.operand')
const operatorBtn = document.querySelectorAll('.operator')
const clearBtn = document.getElementById('clearBtn');
const negativeBtn = document.getElementById('negativeBtn');
const percentBtn = document.getElementById('percentBtn');
const equalBtn = document.getElementById('equalBtn');
const decimalBtn = document.getElementById('decimalBtn');
const screenNum = document.getElementById('screen');

let resetter = false;
let firstOperand = "";
let secondOperand = "";
let operator = "";

numBtn.forEach((button)=>{
    button.addEventListener('click',()=>{

        if (firstOperand.length == 10 || secondOperand.length == 10) {
            return;
        } else {
            if (firstOperand == "" && resetter == false) {
                firstOperand = button.value.toString();
                screenNum.textContent = firstOperand;
            } else if (firstOperand != "" && resetter == true && operator == "") {          //
                firstOperand = button.value.toString();                                     //
                screenNum.textContent = firstOperand;                                       //
                resetter = false;                                                           //
            } else if (firstOperand != "" && operator == "") {
                firstOperand += button.value.toString();
                screenNum.textContent = firstOperand;
            } else if (secondOperand == "" && operator != "") {
                secondOperand = button.value.toString();
                screenNum.textContent = secondOperand;
            } else {
                secondOperand += button.value.toString();
                screenNum.textContent = secondOperand;
            };
        }

    })
})

operatorBtn.forEach((button)=>{
    button.addEventListener('click',()=>{

        if (firstOperand == "") {
            return;
        } else if (firstOperand != "" && operator != "" && secondOperand != "") {
            operation();
            firstOperand = screenNum.innerText;
            operator = button.value;
            secondOperand = ""
        }
        else {
            operator = button.value;
        }
    })
})

function operation() {

    switch (operator) {
        case "plus":
            resetter = false;
            const plusResult = Number(firstOperand) + Number(secondOperand);
            screenNum.innerText = plusResult;
            newCalc(plusResult);
            break;
        case "minus":
            resetter = false;
            const minusResult = Number(firstOperand) - Number(secondOperand);
            screenNum.innerText = minusResult;
            newCalc(minusResult);
            break;
        case "multiply":
            resetter = false;
            const multiplyResult = Number(firstOperand) * Number(secondOperand);
            screenNum.innerText = multiplyResult;
            newCalc(multiplyResult);
            break;
        default:
            if (secondOperand == "0") {
                screenNum.innerHTML = "Bruh";
            } else {
                resetter = false;
                const divideResult = Number(firstOperand) / Number(secondOperand);
                screenNum.innerText = divideResult;
                newCalc(divideResult)
            }
    }
}

equalBtn.addEventListener('click',()=>{
    
    if (firstOperand == "" || operator == "" || secondOperand == "") {
        return;
    } else {
    operation();
    resetter =  true;
    }
})

clearBtn.addEventListener('click',()=>{

    screenNum.innerText = "0";
    firstOperand = "";
    secondOperand = "";
    operator = ""
    resetter = false;

})

negativeBtn.addEventListener('click',()=>{

    if (firstOperand == "" && operator == "" && secondOperand == "") {
        return;
    };
    if (firstOperand != "" && operator == "" && secondOperand == "") {
        if (firstOperand.toString().includes('-')) {
            const tempHolder = firstOperand.replace('-',"");
            firstOperand = tempHolder;
            screenNum.textContent = firstOperand;
        } else {
            firstOperand = '-' + firstOperand;
            screenNum.textContent = firstOperand;
        }
    };
    if (firstOperand != "" && operator != "" && secondOperand == "") {
        return;
    }
    if (firstOperand != "" && operator != "" && secondOperand != "") {
        if (secondOperand.toString().includes('-')) {
            const tempHolder = secondOperand.replace('-',"");
            secondOperand = tempHolder;
            screenNum.textContent = secondOperand
        } else {
            secondOperand = '-' + secondOperand;
            screenNum.textContent = secondOperand;
        }
    }
})

percentBtn.addEventListener('click',()=>{

    if (firstOperand == "" && operator == "" && secondOperand == "") {
        return;
    };
    if (firstOperand != "" && operator == "" && secondOperand == "") {
        const tempHolder = Number(firstOperand) / 100;
        firstOperand = tempHolder;
        screenNum.textContent = firstOperand;
    };
    if (firstOperand != "" && operator != "" && secondOperand == "") {
        return;
    }
    if (firstOperand != "" && operator != "" && secondOperand != "") {
        const tempHolder = Number(secondOperand) / 100;
        secondOperand = tempHolder;
        screenNum.textContent = secondOperand;
    }

})

function newCalc(prevResult) {
    firstOperand = prevResult
    operator = "";
    secondOperand = "";
}

decimalBtn.addEventListener('click',()=>{

    if (screenNum.innerText.includes('.')) {
        return;
    } else {
        if (firstOperand.length == 10 || secondOperand.length == 10) {
            return;
        } else {
            if (firstOperand == "") {
                firstOperand = "0."
                screenNum.textContent = firstOperand;
            } else if (firstOperand != "" && operator == "" && secondOperand == "") {
                firstOperand += '.';
                screenNum.textContent = firstOperand;
            } else if (firstOperand != "" && operator != "" && secondOperand == "") {
                secondOperand = "0."
                screenNum.textContent = secondOperand;
            } else if (firstOperand != "" && operator != "" && secondOperand != "") {
                secondOperand += '.';
                screenNum.textContent = secondOperand;
            };
        }
    }

}
)