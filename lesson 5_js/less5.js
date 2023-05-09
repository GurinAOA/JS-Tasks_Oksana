//Задание 1
// function Multiply(a, b) {
//   if (Object.keys(arguments).length > 1) {
//     if (typeof a == "number" && typeof b == "number") {
//       const result = a + b;
//       console.log(result);
//       return;
//     }
//   }

//   console.log("введенные данные не являются числами");
// }

// Multiply(5, 'kkk');

//Задание 2
// function square(a) {
//   if (Object.keys(arguments).length > 0) {
//     console.log(a * a);
//     return;
//   }

// console.log('Функция "square" не может быть вызвана без аргумента');
// }

// square(10);

// square();

//Задание 3
// function randomIntager(number) {
//   if (number > 1 && number < 10) {
//     const result = Math.floor(Math.random() * (10 - 1)) + 1;
//     if (result == number) {
//       console.log("Вы выиграли");
//       return;
//     }
//     console.log(
//       `Вы не угадали, ваше число -  ${number},  а выпало число ${result}`
//     );
//   }
// }
// randomIntager(5);

//Задание 4

// function filterFor(arr, a) {
//   let resultArr = [];
//   return arr.filter(item => item >= a);;
// }
// let arr = [5, 4, 3, 8, 0];

// let filtered = filterFor(arr, 3.11);

// console.log(filtered);

//Задание 5

// const names = ["Olga", "Maria", "Oksana", "Diana"];
// const copyArr = [...names];
// console.log(copyArr);

//Задание 6

// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: 'string',
//   d: 12,
// }
// let num=0
// for( let key in objectWithNumbers){
//   if( typeof objectWithNumbers[key]=='number')
//   {num+=objectWithNumbers[key]
//   }
// }
// console.log(num);

//Задание 1

//пример с урока
// const str = "Hello world";
// const newArr = str.split("");
// const newArrItem = newArr.map((item) => {
//   const result = item.split("");
//   return result;
// });
// console.log(newArrItem.flat());

// let str = "oksana";
// function ucFirst(str) {
//   if (!str) return str;

//   return str[0].toUpperCase() + str.slice(1);
// }

// console.log(ucFirst(str) );

//Задание 2

// Не работает!!!!!!!!!!!!!!!

// function checkSpam(str) {
//   const result = str.toLowerCase();
//   if (result.includes('badWord')  ||  result.includes('XXX')) {
//     console.log('true');
//   }
// }
// checkSpam('badWord');

//Задание 3
// let str = "привет Женя";
// const newArr = str.split("");
// console.log(newArr);
// const reverseArr = newArr.reverse();
// console.log(reverseArr);
// const joinArr = reverseArr.join(' ');
// console.log(joinArr);

//Задание 4

// let stations = [
//   "MAN675847583748sjt567654;Manchester Piccadilly",

//   "GNF576746573fhdg4737dh4;Greenfield",

//   "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",

//   "SYB4f65hf75f736463;Stalybridge",

//   "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
// ];

// stations.forEach((item) => {
//   console.log(`${item.slice(0, 3)}: ${item.slice(item.indexOf(";") + 1)}`);
// });

//Задание 5

// let strings = [
//   "кришна",
//   "кришна",
//   "харе",
//   "харе",
//   "харе",
//   "харе",
//   "кришна",
//   "кришна",
//   ":-O",
// ];

// const unique = (arr) => {
//   const newArr = [];
//   arr.forEach((item) => {
//     newArr.includes(item) ? null : newArr.push(item);
//   });
//   return newArr;
// };
// console.log(unique(strings));


