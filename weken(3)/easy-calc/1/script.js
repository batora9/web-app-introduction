const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const clear = document.getElementById('clear');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

// function addNums(){
//     result.textContent = Number(num1.value) + Number(num2.value);
// }
// add.addEventListener('click', addNums);

add.addEventListener('click', () => {
    result.textContent = Number(num1.value) + Number(num2.value);
    }
);

subtract.addEventListener('click', () => {
    result.textContent = Number(num1.value) - Number(num2.value);
    }
);

multiply.addEventListener('click', () => {
    result.textContent = Number(num1.value) * Number(num2.value);
    }
);

divide.addEventListener('click', () => {
    result.textContent = Number(num1.value) / Number(num2.value);
    }
);

clear.addEventListener('click', () => {
    num1.value = '';
    num2.value = '';
    result.textContent = '';
    }
);