"use strict";

///хранилище (store)
let userNameArr = [];

// controller
const btn = document.querySelector("button");
const container = document.querySelector(".container");
btn.addEventListener("click", () => {
  addUserName();
  CreateListPage(userNameArr);
});
container.addEventListener("click", delElPage);

//model
///добавляет данные в массив
function addUserName() {
  const lastName = document.querySelector("#lastName");
  const userName = document.querySelector("#userName");
  const obj = {
    lastName: lastName.value,
    userName: userName.value,
    id: getRandomInteger(10000),
  };

  userNameArr.push(obj);
  lastName.value = "";
  userName.value = "";
}
///перебирает массив и отрисовывает элементы на странице
function CreateListPage(arr) {
  container.innerHTML = "";

  if (arr.length > 0) {
    arr.forEach((item) => {
      createTemplate(item);
    });
  } else {
    container.innerHTML = "<h1>В массиве ничего нет</h1>";
  }
}
//принимает на каждой итерации элемент массива и добавляет на страницу
function createTemplate({ lastName, userName, id }) {
  const div = document.createElement("div");

  div.insertAdjacentHTML(
    "beforeend",
    `<span>${lastName}:${userName}</span><button id='${id}'class ='btnDel'>delete</button>`
  );
  container.appendChild(div);
}
function delElPage(event) {
  if (event.target.classList.contains("btnDel")) {
    const { id } = event.target;
    const newArr = clearArrUser(userNameArr, id);
    userNameArr = newArr;
    CreateListPage(userNameArr);
  }
}
function clearArrUser(arr, id) {
  return arr.filter((item) => {
    if (item.id == id) {
      return false;
    }
    return true;
  });
}
function getRandomInteger(max) {
  return Math.floor(Math.random() * max);
}
