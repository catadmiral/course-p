// Урок 16 ---- Функции --------------------->

'use strict';

function showFirstMessage() {  // Имя функции начинается с глагола
    console.log('Hello World!');
}

showFirstMessage(); // Вызвали функцию

//--------------------->

function showFirstMessage(text) {  // text - аргумент
    console.log(text);
}

showFirstMessage('Hello World!'); // Вызвали функцию

//--------------------->

let num = 50; // глобальная переменная

function showFirstMessage(text) {
    console.log(text); // локальная функция доступна только в пределах функции
    num = 20; 
}

showFirstMessage('Hello World!');
console.log(num);

//--------------------->

function calc(a, b) {
    return (a + b); // завершает выполнение текущей функции и возвращает её значение
}

console.log(calc(88, 666));
console.log(calc(84545, 453573));
console.log(calc(534535, 23424));

//--------------------->

function ret() {
    let nam = 50;

    // тут может быть много кода с вычислениями

    return num;
}

const anotherNum = ret();
console.log(anotherNum);
