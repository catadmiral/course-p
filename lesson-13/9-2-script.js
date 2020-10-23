// Урок 13 - Условия

'use strict';

if (4 == 5) {
    console.log('Ок');
} else {
    console.log('Error');
}


const nam = 50;

// if (nam < 49) {
//     console.log('Error');
// } else if (nam > 100) {
//     console.log('Много!');
// } else {
//     console.log('Ок!')
// }

// Тернарный оператор ----------------
(nam === 50) ? console.log('Ok!') : console.log('Error');

// Конструкция свитч ----------------
const nam = 50;

switch (nam) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно!');
        break;
    default:
        console.log('Не в этот раз!');
        break;
}
