// Урок 17 ---- Методы и свойства строк и чисел --------------------->

'use strict';

const str = 'Text';
const arr = [1, 7, 4, 6, 2]

console.log(str.length); // Свойство length (кол-во символов) 
console.log(arr.length);
console.log(str[3]); // [3] - индекс символа, который будет показан

console.log(str.toUpperCase()); // toUpperCase - метод и после него ставять ()
console.log(str.toLowerCase()); 


const fruit = 'Some fruit';
console.log(fruit.indexOf()); // indexOf - метод, который показывает с какого индекса начинается fruit


const logg = "Hello World!";
console.log(logg.slice(6, 10)); // slice - метот, который выризвет из строки определенный кусок

const loggi = "Hello World!";
console.log(loggi.slice(3)); // строка будет взята с 3 индекса и до самого конца

const loggi = "Hello World!";
console.log(loggi.slice(-3, -2)); // отрицательные значения позволяют вырезать части строк с конца строки

const loggih = "Hello World!";
console.log(loggih.substring(6, 11)); // substring - метод = slice, но он не работает с отрицательными значениями

const loggih = "Hello World!";
console.log(loggih.substr(6, 2)); // substr - метод = slice. Первое значение говорит с какого индекса начинать, второе число говорит сколько символов вырезать



// методы, которые работают с числами -------------------->


const nam = 12.6;
console.log(Math.round(nam)); // round - округляет до ближайшего целого числа

const test = '12.6px';
console.log(parseInt(test)); // parseInt - переводит строку в целое число
console.log(parseFloat(test)); // parseInt - переводит строку в число с плавающей точкой
