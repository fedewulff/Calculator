
const numbers = document.querySelectorAll(`.numbers`);
const operators = document.querySelectorAll(`.operators`);
const input1 = document.querySelector(`.input1`);
const input2 = document.querySelector(`.input2`);
const equal = document.querySelector(`.equal`);
const clear = document.querySelector(`.clear`);
const dot = document.querySelector(`#dot`);
const del = document.querySelector(`#delete`)

input1.value = ``
input2.value = 0
let buttonClicks = 0;
let operator = [`+`, `-`, `*`, `/`]
let button = ``
let toto = ``
let pipi = ``
let newstring = ``







operators.forEach((operatorButton) => {
    operatorButton.addEventListener(`click`, function() {
        
        buttonClicks++;

        dot.disabled = false;

        if(buttonClicks == 1){
        input1.value = `${input2.value} ${operatorButton.textContent} `;
        }
        
        if(buttonClicks >= 2) {
            
            toto = input1.value.split(` `);
            pipi = [toto[0],toto[1]]
           
            button = operatorButton.textContent
            
            operate(Number(pipi[0]), pipi[1], Number(input2.value))
        }

        if(buttonClicks >= 0) {
            input2.value = ``
        } 
    })
});

numbers.forEach((numberButton) => {
    numberButton.addEventListener(`click`, function() {
        
        if (input2.value == 0 || input2.value == `Undefined`) {input2.value= ``}
        
        input2.value += numberButton.textContent;
        console.log((input2.value))
        if(Number.isInteger(Number(input2.value)) == false) {dot.disabled = true; console.log(`titi`)}   
        if(Number.isInteger(Number(input2.value)) == true) {dot.disabled = false; console.log(`popo`)}  
        
    })
});

equal.addEventListener(`click`, function(){
    buttonClicks = 0
    toto = input1.value.split(` `);
    pipi = [toto[0],toto[1]]
    equalize(Number(pipi[0]), pipi[1], Number(input2.value))
})

clear.addEventListener(`click`, function(){
    dot.disabled = false;
    buttonClicks = 0
    input1.value = ``
    input2.value = 0
})

del.addEventListener(`click`, function(){
    let newstring = input2.value;
    input2.value = newstring.slice(0,-1);
})

function sum(a,b){
    return (a + b)
}

function substract(a,b){
    return (a - b)
}

function multiply(a,b){
    return (a * b)
}

function divide(a,b){
    return (a / b)
}


function operate(a,operator,b){
    
    if(operator === `+`){
        input1.value = `${sum(a,b)} ${button}`
        console.log(input1.value)
    }
    if(operator === `-`){
        input1.value = `${substract(a,b)} ${button}`
        console.log(input1.value)
    }
    if(operator === `*`){
        input1.value = `${multiply(a,b)} ${button}`
    }
    if(operator === `/` && b === 0){
        input1.value = ``
        input2.value = `Undefined`
    }
    if(operator === `/` && b !== 0){
        input1.value = `${divide(a,b)} ${button}`
    }
}

function equalize(a,operator,b){
    
    if(operator === `+`){
        input2.value = `${Number(sum(a,b).toFixed(4))}`
     
        input1.value = ``
        
       
    }
    if(operator === `-`){
        input2.value = `${Number(substract(a,b).toFixed(4))}`
        
        input1.value = ``
        
    }
    if(operator === `*`){
        input2.value = `${Number(multiply(a,b).toFixed(4))}`
        
        input1.value = ``
    }
    if(operator === `/` && b === 0){
        input1.value = ``
        input2.value = `Undefined`
    }
    if(operator === `/` && b !== 0){
        input2.value = `${Number(divide(a,b).toFixed(4))}`
        
        input1.value = ``
    }
}
