//Модуль 5.3, задание 1

// let userInput = +prompt("Введите число");
//
// if (typeof userInput === "number" && isNaN(userInput) === false) {
//     if (userInput % 2 === 0) {
//         console.log("Введённое число - четное");
//     } else {
//         console.log("Введённое число - нечетное");
//     }
// } else {
//     console.log("Упс, кажется вы ошиблись");
// }


//Модуль 5.3, задание 2

// let x;

// if (typeof x === "number") {
//     console.log("x - число");
// } else if (typeof x === "string") {
//     console.log("x - строка");
// } else if (typeof x === "boolean") {
//     console.log("x - логический тип");
// } else {
//     console.log("Тип x не определён");
// }


//Модуль 5.4, задание 3

// let string = "Hello";

// function reverseString(str) {
//     return str.split("").reverse().join("")
// }

// console.log(reverseString(string));


//Модуль 5.4, задание 4

// let x = Math.floor(Math.random() * 101);

// console.log(x);


//Модуль 5.5, задание 5

// let arrRandom = [3, 14, 15, 92, 65, 35];

// console.log(arrRandom.length);

// 1-ый вариант вывода всех элементов массива

// for (let i = 0; i < arrRandom.length; i++) {
//     console.log(arrRandom[i]);
// }

// 2-ой вариант вывода всех элементов массива

// arrRandom.map(function (item, index, array) {
//     console.log(item);
// })


//Модуль 5.6, задание 6

// let arrRandom = [3, 14, 15, 92, 65, 35];
//
// let arrRandomSame = [27, 27, 27, 27];
//
// function arrSameness(arr) {
//     let j = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== j) {
//             console.log('false');
//             return
//         }
//     }
//     console.log('true');
// }
//
// arrSameness(arrRandom)
//
// arrSameness(arrRandomSame)


//Модуль 5.7, задание 7

// let arrRandom = [3, 14, 15, 92, 65, 35, 0, 0, 'närsomhelst', null, true];
//
// function checkArrayItems(arr) {
//     let oddNumbers = 0;
//     let evenNumbers = 0;
//     let nullElements = 0;
//     let zeroes = 0;
//     let everythingElse = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof(arr[i]) === 'number' && arr [i] === 0) {
//             ++zeroes;
//             ++evenNumbers;
//         } else if (typeof(arr[i]) === 'number' && arr[i] % 2 === 0) {
//             ++evenNumbers;
//         } else if (typeof(arr[i]) === 'number' && arr[i] % 2 !== 0) {
//             ++oddNumbers;
//         } else if (arr[i] === null) {
//             ++nullElements;
//         } else {
//             ++everythingElse
//         }
//     }
//     console.log(`There are ${oddNumbers} odd numbers, ${evenNumbers} even numbers, ${nullElements} null elements, ${zeroes} zeroes, and ${everythingElse} other items in the array`);
// }
//
// checkArrayItems(arrRandom)


//Модуль 5.7, задание 8

// let favMap = new Map ();
//
// favMap.set ('song', 'evermore');
// favMap.set ('game', 'Hades');
// favMap.set ('RE game chapter', 4);
//
// function allEntriesMap(map) {
//     for (let elem of map.entries()) {
//         console.log(`Ключ - ${elem[0]}, значение - ${elem[1]}`)
//     }
// }
//
// allEntriesMap(favMap)











