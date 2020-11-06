'use strict';

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

// Создание ссылки на объект ---------------
// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Ссылка на сущ. объекст obj

// copy.a = 10;

// console.log(copy);
// console.log(obj);


// Создание поверхностной копии объекста ---------------

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(numbers);
// console.log(newNumbers);


// Объединение объектов при помощи Object.assign ---------------


// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const add = {
//     d: 17,
//     e: 20
// };

// console.log(Object.assign(numbers, add)); //numbers - это тот объект, в который мы помещаем, add - это тот объект, который мы помещаем в другой



// Создание копии объекта при помощи Object.assign (перенос объекта в пустой объект) ---------------

// const add = {
//     d: 17,
//     e: 20
// };

// const clon = Object.assign({}, add);

// clon.d = 300;

// console.log(add);
// console.log(clon);


// Копирование массива slice

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'drgdrgdr';

// console.log(oldArray);
// console.log(newArray);

// Объединение массивов с помощью разворачивающего оператора Spread

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejornal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 6];

// log(...num);