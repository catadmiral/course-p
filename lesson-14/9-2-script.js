// Урок 14 - циклы

'use strict';

let nam = 50;

// while (nam < 55) {
//     console.log(nam);
//     nam++;
// }

// do {
//     console.log(nam);
//     nam++;
// } while (nam < 55);

// for (let i = 0; i < 8; i++) {
//     console.log(nam);
//     nam++;
// }

// for (let i = 0; i < 10; i++) {
//     if (i === 6) {
//         break;
//     }

//     console.log(i);
// }

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }

    console.log(i);
}