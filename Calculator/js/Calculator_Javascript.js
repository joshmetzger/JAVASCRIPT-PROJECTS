// object to keep track of values:
const Calculator = {
    Display_Value: '0',
    // hole the first operand for any expressions, set null for now
    First_Operand: null,
    // check if second operand has been inputted by user:
    Wait_Second_Operand: false,
    // hold the operator, set null for now:
    operator: null,
};

// modifies values each time a button is clicked:
function Input_Digit(digit){
    const {Display_Value, Wait_Second_Operand } = Calculator;
    // check if the Wait_Second_Operand is true and sets Display_Value to the key that was clicked on:
    if(Wait_Second_Operand === true){
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // overwrite Display_Value if the current value is 0, otherwise it adds to it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

function Input_Decimal(dot){
    // ensure accidental clicking of decimal point doesn't cause bugs
    if(Calculator.Wait_Second_Operand === true) return;
    if(!Calculator.Display_Value.includes(dot)){
        // add a decimal point if Display_Value does not contain one
        Calculator.Display_Value += dot;
    }
}

// Handle Operators Section:
function Handle_Operator(Next_Operator){
    const {First_Operand, Display_Value, operator} = Calculator;
    // when a key is pressed, convert number displayed on screen to a number 
    // and store the result in Calculator.First_Operand if it doesn't already exist.
    const Value_of_Input = parseFloat(Display_Value);
    // check if an operator already exists and if Wait_Second_Operand is true,
    // update the operator and exit the function
    if(operator && Calculator.Wait_Second_Operand){
        Calculator.operator = Next_Operator;
        return;
    }
    if(First_Operand == null){
        Calculator.First_Operand = Value_of_Input;
        console.log(Value_of_Input)

    } else if(operator){ // check if operator already exists
        const Value_Now = First_Operand || 0;
        // if operator exists, property lookup is performed for the operator in the Perform_Calculation object, 
        // and the function that matches the operator s executed:
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        // set numbers after decimal
        result = Number(result).toFixed(9);
        // remove any trailing zeros
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result)
        Calculator.First_Operand = parseFloat(result)
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};
function Calculator_Reset(){
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
// update calc screen with the contents of the Display_Value
function Update_Display(){
    // use the calculator-screen class to target the input tag in HTML
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();

// monitor button clicks:
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // the target is an object that represents the element that was clicked
    const { target } = event;
    // if clicked element is not a button, exit function
    if(!target.matches('button')){
        return;
    }
    if(target.classList.contains('operator')){
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if(target.classList.contains('decimal')){
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    // ensure 'AC' clears all inputs from the screen
    if(target.classList.contains('all-clear')){
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})