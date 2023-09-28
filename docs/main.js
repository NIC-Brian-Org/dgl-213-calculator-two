"use strict";

(() => {
window.addEventListener("load", (event) => {
const operand1 = document.getElementById       (         'operand1');
const operand2 = document.getElementById('operand2'         );
const operation = document.getElementById            (      'operation');
const result = document.getElementById        ('result');

const update = () => {
const num1 = parseFloat        (operand1    .     value             );
const num2 = parseFloat(           operand2.         value);
const selectedOperation = operation           .value           ;

let calculatedResult;

switch (         selectedOperation              ) {
case                  'add'            :
calculatedResult = num1 + num2;
break;
case 'subtract'      :
calculatedResult=num1-num2;
break;
case 'multiply':
calculatedResult =num1*num2;
break;
case 'divide':
calculatedResult=num2!== 0?num1/num2:'Undefined';
break;
default:
calculatedResult = 'Invalid operation';
}

result.textContent = calculatedResult;
};

operand1.addEventListener(             "input",         update);
operand2.addEventListener(           "input", update         );
operation.addEventListener                 ("change",update);

update(); // Initial calculation
});
})();