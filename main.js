'use strict'
//first number
let firstNum;
do {
   firstNum = +prompt('Введіть число N:', '')
} while (!Number.isInteger(firstNum))
console.log('Первое число: ', firstNum)

//second number
let secondNum;
do {
   secondNum = +prompt('Введіть число M:', '')
} while (!Number.isInteger(secondNum))
console.log('Второе число: ', secondNum)

//boolean
const doubleNumbers = confirm("Пропускати парні числа?");
console.log('Парне число чи ні: ', doubleNumbers)

//sum of numbers - paired or unpaired
let sum = 0
for (let i = firstNum; i <= secondNum; i++) {
   if (doubleNumbers && i % 2 === 0) continue
   sum += i
}

console.log('Сума парних чи непарних чисел: ', sum)

// outputting data to a page
document.getElementById("first").innerHTML = firstNum;
document.getElementById("second").innerHTML = secondNum;
document.getElementById("boolean").innerHTML = doubleNumbers;
document.getElementById("sum").innerHTML = sum;

