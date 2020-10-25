/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// 'use strict';

// Код возьмите из предыдущего домашнего задания

// let answreOne;
// let answreTwo;

// for (let i = 0; i < 1; i++) {
//     answreOne = prompt('Один из последних просмотренных фильмов?', 'Ёлки');
//     if (answreOne.length > 10) {
//         i--;
//     }
//     answreOne = +prompt('На сколько оцените его?', 'От 0 - 10');
//     if (answreOne.length > 10) {
//         i--;
//     }
// }

// for (let i = 0; i < 1; i++) {
//     answreOne = prompt('Один из последних просмотренных фильмов?', 'Ёлки');
//     if (answreOne.length < 10) {
//         answreTwo = prompt('На сколько оцените его?', 'От 0 - 10');
//         if (answreTwo.length < 10) {
//             break;
//         } else {
//             alert('Зачем так много букв!? Обнови страницу и попробуй еще раз!!!');
//         }
//     } else {
//         alert('Зачем так много букв!? Обнови страницу и попробуй еще раз!!!');
//     }
// }


// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '18');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// if (personalMovieDB.count < 10) {
//     alert('Ты лузер!')
// }

// if (personalMovieDB.count > 10 & personalMovieDB.count < 30) {
//     alert('Ну норм!')
// }

// if (personalMovieDB.count > 30) {
//     alert('Да ты просто ГРУТ!')
// }

// const a = prompt('Один из последних просмотренных фильмов?', 'Ёлки'),
//       b = prompt('На сколько оцените его?', 'От 0 - 10'),
//       c = prompt('Один из последних просмотренных фильмов?', 'Ёлки'),
//       d = prompt('На сколько оцените его?', 'От 0 - 10');



// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[b] = c;


// Правильное решение ----------------------------------------->

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', 'Ёлки'),
          b = prompt('На сколько оцените его?', 'От 0 - 10');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
    personalMovieDB.movies[a] = b;
}

if (personalMovieDB.count < 10) {
    alert('Ты лузер!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Норм!');
} else if (personalMovieDB.count > 30) {
    alert('Да ты просто ГРУТ!');
} else {
    alert('Блин, ты совершил ошибку!');
}

console.log(personalMovieDB);