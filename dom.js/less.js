////DOm

//Задание 1
// console.log(`На компьютере с ОС ${navigator.platform} с помощью браузера ${navigator.appCodeName} я открыл страничку ${location}document.location`);

//Задание 2
// document.body.children[0].children;
// for (let li of document.body.children[0].children) {
//   console.log(li.innerText);
// }
// const names=document.querySelectorAll('li');
// console.log(names);
// names.forEach((li) => console.log(li.innerText));
//Задание 4

// let p = document.createElement("p");
// p.innerText = "Hello World";
// p.style.fontSize = "32px";
// p.style.fontWeight = "bold";

// document.body.appendChild(p);

//Почему не добавляется в сам html документ созданный тег?

//Задание 5

// let p = document.createElement("p");
// let now = new Date().toLocaleString();
//  p.innerText = now;
// document.body.appendChild(p);

//p создан не внутри html

//Задание 6 (не работает)
//
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.
// function options(p, red,content){
//     let p = document.createElement("p");
//     let red = document.createElement("red");
//     let content = document.createElement("content");
//     p.innerText = "content";
//     p.style.color = "red";
//     console.log(p);
//     document.body.appendChild(p);

// }
// options()

//Задание 7(не работвет)
// Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.
// let select = document.createElement("select");
// let option = document.querySelector("select").createElement("option");
// document.body.appendChild(select);

// for (let i = 0; i < 2020; i++) {
//   if (select.option >= "1960" && select.option <= 2020) {
//     console.log(option);
//   }
// }
