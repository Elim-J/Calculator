//add
function add(a,b){
    return a + b;
}
//subtract
function subtract(a,b){
    return a - b;
}
//multiply
function multiply(a,b){
    return a * b;
}
//divide
function divide(a, b){
    if(b === 0){
        alert("You can't divide by zero!");
    } else{
        return a / b;
    }
}
//evaluate
function evaluate(str){
    //when equal sign is pressed
    //if regex expression contains number symbol number, then use switch statement
        //else alert expression is incomplete

}

function addNumber(e){
    //when number button is pressed, number is concatenated to global string
    let number = e.target.id;
    expression += number;
    console.log(expression);
}

function addOperator(e){
    console.log(e.target.textContent); //this is the operator to concatenate to string
    //when operator button is pressed:
    let regex = /[^0-9]/;   //if there is no operator, it should be an empty string (deal with decimal later)
                            //this regex takes all characters EXCEPT numbers
    let tmp = expression.match(regex);
    //if string is not empty and does not already contain an operator -- all operators use same function
        //concat operator to string 
    if(tmp === null){
        expression += e.target.textContent;
        console.log(expression);
    }else {
        alert("There is already an operator");
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
divideBtn.addEventListener('click', addOperator);
multiplyBtn.addEventListener('click', addOperator);
minusBtn.addEventListener('click', addOperator);
plusBtn.addEventListener('click', addOperator);

equalBtn.addEventListener('click', evaluate);





        
