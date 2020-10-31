'use strict';


// удаление ключа из массива -------------
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'bleak',
//         bg: 'red'
//     }
// };

// console.log(options.name);
// delete options.name; // удаление ключа из массива
// console.log(options);


// Перебор всех ключей и значений -------------
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'bleak',
//         bg: 'red'
//     }
// };

// for (let key in options) {  // let key in options - перебираем все ключи в массиве options
//     console.log(`Свойство ${key} имеет значение ${options[key]}`)
// }


// Перебор всех ключей и значений в объекте и в подобъекте -------------

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'bleak',
//         bg: 'red'
//     }
// };

// for (let key in options) {  // let key in options - перебираем все ключи в массиве options
//     if (typeof(options[key]) === 'object') { // если мы встречаем в массиве еще один массив, то мы запускаем новый перебор ключей во внутреннем массиве
//         for (let i in options[key]) { // создаем итератор i 
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`); // ${options[key][i]} - это получение двойного доступа options --> [key] --> [i]
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }


// Считаем кол-во ключей в объекте -------------

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'bleak',
//         bg: 'red'
//     }
// };

// let counter = 1; // заводим переменную со значением 1 (это так называемый счетчик со стартом = 1)

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;            
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++; // прибавляем к переменной counter + 1 после каждого прохода цикла
//     }
// }

// console.log(counter); // выводим общее значение из счетчика


// Как посчитать ключи в массиве быстро и правильно -------------

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'bleak',
//         bg: 'red'
//     }
// };

// console.log(Object.keys(options).length); // keys - создает массив со всеми значениями объекта. length - считает кол-во элементов



// Создаем метод для того, чтобы объект мог что-то делать -------------

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'bleak',
//         bg: 'red'
//     },
//     makeTest: function() { // создаем метод
//         console.log('Test');
//     }
// };

// options.makeTest(); // запускаем метод, который расположен в объекте
// console.log(Object.keys(options).length);


// Диструктуризация объекта -------------

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'bleak',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();
const {border, bg} = options.colors; // способ деструктуризации объекта. Взяли свойства border, bg и вынесли их. 
console.log(border);