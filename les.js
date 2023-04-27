// Задание 1
let country = 'Sweden';
let access  = country == 'Sweden' ? "true" : "false";
alert(access);

// Задание 2
let num=10;
for (let i=0; i<10; i++){
    num++;
    console.log (num);
 }
 if (num=11){
    console.log(num)
 }

// вариант 2
let num = 10;
for (let i = 10; i < 20; i++) {
  num++;
  console.log(num);
  if (num == 11) {
    console.log(num);
  }
}

// Задание 3

for (let i=0; i<10; i +=2){
 let num = prompt ('Enter a number');
  if (num=10){
    console.log('Равно 10');
  }
  else {
    console.log('Не равно 10');
  }

}

// Задание 4
const num = prompt ('Введите число от 0 до 100');
for (let i=0; i<100; i++){
let numResult = i**2;
if (i<num){
    console.log(numResult);
}
}

// Задание 5

for (let i=1; i<100; i++){
  if( i %3 == 0 && i %5==0){
    console.log('BuzzFizz')
  }
  else if (i %3==0){
    console.log('Fizz');
  }
  else if (i %5==0){
    console.log('Buzz');
  }
}

// Задание 6

for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
    }

    let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

// Задание 7
function ExponNumbers(min, max) {
  let square = 1;
  for (let i = min; i <= max; i++) {
    square = i ** 2;
  }
  return square;
}
console.log(ExponNumbers(1, 10));

// Задание 8
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }
    function getRandomRGB(){
        let numFirst = getRandomInteger (0, 255);
        let numSecond = getRandomInteger (0, 255);
        let numThird = getRandomInteger (0, 255);
        return 'rgb('+ numFirst + ','+ numSecond+','+'numThird'+ ')';

    }

// Задание  9

function fullNumbers(n) {
  for (let i = 1; i < n; i = i + 0.5) {
    if (i % 1 == 0) {
      console.log("integer");
    } else {
      console.log("decimal");
    }
  }
}
