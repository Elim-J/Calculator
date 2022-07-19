//add
function add(a,b){
    return parseInt(a) + parseInt(b);
}
//subtract
function subtract(a,b){
    return parseInt(a) - parseInt(b);
}
//multiply
function multiply(a,b){
    return parseInt(a) * parseInt(b);
}
//divide
function divide(a, b){
    if(parseInt(b) === 0){
        alert("You can't divide by zero!");
    } else{
        return parseInt(a) / parseInt(b);
    }
}
//evaluate
function evaluate(){
    let regex = /(\d+)(\W)(\d+)/;    //separates expression into digit operator digit
    let expressionArr = expression.match(regex); //first digit is at index 1

    if(expressionArr === null){
        console.log("You need to enter an expression!");
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
        default:
            console.log("Something went terribly wrong");
        }
    }
}

function addNumber(e){
    //when number button is pressed, number is concatenated to global string
    let number = e.target.id;
    expression += number;
    console.log(expression);
}

function appendOperator(e){
    console.log(e.target.textContent); //this is the operator to concatenate to string
    //when operator button is pressed:
    let regex = /[^0-9]/;   //if there is no operator, it should be an empty string (deal with decimal later)
                            //this regex takes all characters EXCEPT numbers
    let tmp = expression.match(regex);
    //if string is not empty and does not already contain an operator -- all operators use same function
        //concat operator to string 
    if(tmp === null && expression != ""){
        expression += e.target.textContent;
        console.log(expression);
    }else {
        alert("Cannot add operator");
    }
    
}

function render(){
    //render string in the div
}

//[ignore decimal btn for now]
//global string for storing entire expression
let expression = "";

//add eventlistener to all number buttons 
for(let i = 0; i<=9; i++){
    let numberBtn = document.getElementById(`${i}`);
    numberBtn.addEventListener('click', addNumber);
}

//get all operator btns
let divideBtn = document.getElementById('divide');
let multiplyBtn = document.getElementById('multiply');
let minusBtn = document.getElementById('minus');
let plusBtn = document.getElementById('plus');

let equalBtn = document.getElementById('equal');

//add eventlistener to all operator btn
divideBtn.addEventListener('click', appendOperator);
multiplyBtn.addEventListener('click', appendOperator);
minusBtn.addEventListener('click', appendOperator);
plusBtn.addEventListener('click', appendOperator);

equalBtn.addEventListener('click', evaluate);





        
