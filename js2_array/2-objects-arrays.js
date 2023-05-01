// //Задание 1
// function foo(number, min, max) {
//   if (number >= min && number <= max) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function getNum(number, min, max) {
//   if (number < min || number > max) {
//     return false;
//   }
//   return number;
// }
//Задание 2
// const engineers = {
//   Den: 1000,
//   Matt: 5000,
//   Steve: 2000,
// };

// for (let key in engineers){
//   console.log(
//     `Заработная плата ${key} составляет  ${engineers[key]} рублей`
//   )};

//Задание 3

// const array = ["Maria", "Olga", "Anna", "15", "99"];
// for (let i = 1; i < array.length; i++) {
//   if (i % 2 == 0) {
//     console.log(array[i]);
//   }
// }

//Задание 4
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// numbers.forEach((element, index) => console.log(element, index));

//Задание 5
// let questions = [
//   {
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//   },
//   {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0,
//   },
// ];

// questions.forEach(getResult);
// function getResult (object, index){
//     object.userAnswer=null}
//     console.log(questions);

//Задание 6
//1
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// let i = 0;
// numbers.forEach(getResult);

// function getResult(element, index) {
//   i = i + element;
// }

// console.log(i);

//2

// function getResult(element, index) {
//   if (element % 2 == 0) i = i + element;
// }
// console.log(i);

//3
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// let i = 0;
// let max = 0;
// numbers.forEach(getResult);

// function getResult(element, index) {
//   if (element > max) {
//     max = element;
//   }
// }
// console.log(max);

//4
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// let i = 0;
// let max = 0;
// numbers.forEach(getResult);

// function getResult(element, index) {
//   if (element > max) {
//     if (element == max) {
//       console.log(element);
//     }
//     max = element;
//   }
// }
// console.log(max);

//Задание 7
// let newArr = [];
// let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
// arr.forEach(getResult);
// function getResult(item, index) {
//   if (item >= 0) {
//     newArr.push(item);
//   }
// }
// console.log(newArr);
//Задание 8

// function getArr(array, num) {
//   const newArr = [];
//   array.forEach((item) => {
//     if (item >= num) {
//       newArr.push(item);
//     }
//   });
// }
// console.log(newArr);

//Задание 9
// const users = [
//   { name: "Vasya", age: 23 },
//   { name: "Olya", age: 12 },
//   { name: "Anna", age: 22 },
//   { name: "Alex", age: 18 },
//   { name: "Valery", age: 8 },
// ];
// users.forEach(function (item, index) {
//   if (item.age > 15) {
//     console.log(item.name);
//   }
// });
//Задание 10
let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
const newVegetables = [];
vegetables.forEach(function (item, index) {
  const object = {};
  object[item] = item.length;
  newVegetables.push(object);
});
console.log(newVegetables);
//2
let nameStr = '';
newVegetables.forEach(function (item, index) {
  for (let key in item) {
    nameStr = nameStr + `"${[key]} - ${item[key]}" `;
  }
});
console.log(nameStr)
