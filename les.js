// Задание 1
let country = "Sweden";
let access = country == "Sweden" ? "true" : "false";
console.log(access);

//  задание 2;
let a = 10;
a++;
console.log(a);

let b = 10;
for (let b = 10; b < 20; b++) {
  console.log(b);
}
// Задание 3 1 ч

for (let c = 0; c < 5; c + 2) {
  alert("Введите число");
}
// Задание 3 2 ч

let numb = +prompt("Введите число");
let result;
//  for (let numb=0; numb=10; numb+2){
//   result = ('Равно 10')
// }
for (let numb = 0; numb > 10; numb + 2) {
  result = "Не равно 10";
}
for (let numb = 0; numb < 10; numb + 2) {
  result = "Не равно 10";
}
console.log("result");

// Задание 4
let num = +prompt("Введите число");
let result;
for (let num = 0; num < 100; num++) {
  result = "num**";
}

// Задание 5
let userNumber;
userNumber = prompt("введите число");
for (let userNumber = 0; userNumber < 100; userNumber * 3);
{
  alert(Fizz);
}
for (let userNumber = 0; userNumber < 100; userNumber * 5);
{
  alert(FizzBuzz);
}

// Задание 6
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}
// Задание 7
function ExponNumbers(min, max) {
  let result = 0;
  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
}
console.log(ExponNumbers(1, 100));

//Задание 8
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInteger(0,255));
