'use strict';

// const arr = [1, 2, 3, 6, 8];

// arr.pop(); // метод pop удаляет элемент в конец массива
// arr.push(10); // метод push добавляет элемент в конец массива
// console.log(arr);

// // перебор массива с помощью цикла
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }


// метод forEach

// const arr = [1, 2, 3, 6, 8];

// arr.forEach(function(item, i, arr) {  // аргумент item - это элемент массива, который сейчас перебираем, i - порядковый номер элемента, arr - это ссылка на элемент, который перебираем
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// Перевод строк в массив и сортировка

// const str = prompt('', ''); // задаем вопрос
// const products = str.split(', '); // указываем, какой будет в строке разделитель
// products.sort(); // sort - сортирует элементы массива (сортирует только строки)
// console.log(products.join('; ')); // join - объединяет элементы массива в строку

// Как сортировать числа
const arr = [10, 52, 35, 64, 82];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) { // коллбек функция
    return a - b;
}