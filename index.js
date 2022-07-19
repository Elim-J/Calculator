function add(a,b){
    render(parseInt(a) + parseInt(b));
}

function subtract(a,b){
    render(parseInt(a) - parseInt(b));
}

function multiply(a,b){
    render(parseInt(a) * parseInt(b));
}

function divide(a, b){
    if(parseInt(b) === 0){
        alert("You can't divide by zero!");
    } else{
        render(parseInt(a) / parseInt(b));
    }
}
function exponent(a, b){
    render(parseInt(a) ** parseInt(b));
}

function evaluate(){
    let regex = /(\d+)(\W)(\d+)/;    
    let expressionArr = expression.match(regex);    //separate expression into [fullExpression, digits, operator, digits]

    if(expressionArr === null){
        alert("You need to enter an expression!");
    }else{
        switch(expressionArr[2]){
            case "+": 
                add(expressionArr[1], expressionArr[3]);
                break;
            case "-": 
                subtract(expressionArr[1], expressionArr[3]);
                break;
            case "/": 
                divide(expressionArr[1], expressionArr[3]);
                break;
            case "*": 
                multiply(expressionArr[1], expressionArr[3]);
                break;
            case "^": 
                exponent(expressionArr[1], expressionArr[3]);
                break;
            default:
                alert("Something went terribly wrong");
        }
    }
}

//Append number to string expression
function appendNumber(e){
    let number = e.target.id;
    expression += number;
    render(expression);
}

//Append operator to string expression
function appendOperator(e){
    let regex = /[^0-9]/;   //remove all numbers from expression                  
    let operator = expression.match(regex);

    if(operator === null && expression != ""){  //if no operator and expression has an integer
        expression += e.target.textContent;
        render(expression)
    } else {
        alert("Cannot append operator");
    }
    
}

//display expression and answer
function render(answer){
    calculatorScreen.textContent = answer;
}

let expression = "";

//add eventlistener to all number buttons 
for(let i = 0; i<=9; i++){
    let numberBtn = document.getElementById(`${i}`);
    numberBtn.addEventListener('click', appendNumber);
}

//get all operator btns
let divideBtn = document.getElementById('divide');
let multiplyBtn = document.getElementById('multiply');
let minusBtn = document.getElementById('minus');
let plusBtn = document.getElementById('plus');
let exponentBtn = document.getElementById('exponent');

let equalBtn = document.getElementById('equal');
let calculatorScreen = document.getElementById('number-display');


//add eventlistener to all operator btn
divideBtn.addEventListener('click', appendOperator);
multiplyBtn.addEventListener('click', appendOperator);
minusBtn.addEventListener('click', appendOperator);
plusBtn.addEventListener('click', appendOperator);
exponentBtn.addEventListener('click', appendOperator);

equalBtn.addEventListener('click', evaluate);





        
