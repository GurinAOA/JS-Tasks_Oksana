"use strict";

///хранилище (store)
let userNameArr = [];

// controller
const btn = document.querySelector(".btn_add");
const container = document.querySelector(".container");
const modal = document.querySelector(".wrapper_modal");
const btnCloseModal = document.querySelector(".btn_cl");
const editUserName = document.querySelector("#editUserName");
const editFirstUserName = document.querySelector("#editFirstUserName");
const btnSendForm = document.querySelector(".btn_sendForm");
const searchInput = document.querySelector("#searchInput");
const btnSearch = document.querySelector("#btnSearch");

btn.addEventListener("click", () => {
  addUserName();
  CreateListPage(userNameArr);
});
container.addEventListener("click", (event) => {
  delElPagae(event);
  editPage(event);
});
btnCloseModal.addEventListener("click", closeModal);
btnSendForm.addEventListener("click", redirectListPage);
btnSearch.addEventListener("click", searching);
searchInput.addEventListener("change", changing);

//model
///добавляет данные в массив
function addUserName() {
  const lastName = document.querySelector("#lastName");
  const userName = document.querySelector("#userName");

  const obj = {
    lastName: lastName.value,
    userName: userName.value,
    id: getRandomInt(10000),
  };
  userNameArr.push(obj);
  console.log(userName);
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
    `
    <li>
  <spann>${lastName}::: ${userName}</spann> <button id='${id}' class='btnDel'>DEL</button>
  <button id='${id}' class='btnEdit'>Edit</button>
  </li>
  `
  );
  container.appendChild(div);
}
///делегирование событий
function delElPagae(event) {
  if (event.target.classList.contains("btnDel")) {
    const { id } = event.target;
    userNameArr = clearArrUser(userNameArr, id);
    CreateListPage(userNameArr);
  }
}

function editPage(event) {
  if (event.target.classList.contains("btnEdit")) {
    modal.classList.remove("none");
    const { id } = event.target;
    sendValueToFormModal(id);
  }
}

function redirectListPage(event) {
  const { id } = event.target;
  const redirectEditObject = filterObj(userNameArr, id);
  redirectEditObject.userName = editUserName.value;
  redirectEditObject.lastName = editFirstUserName.value;
  CreateListPage(userNameArr);
  closeModal();
}

function sendValueToFormModal(id) {
  const editObj = filterObj(userNameArr, id);
  editUserName.value = editObj.userName;
  editFirstUserName.value = editObj.lastName;
  btnSendForm.id = editObj.id;
}

function clearArrUser(arr, id) {
  return arr.filter((item) => {
    if (item.id == id) {
      return false;
    }
    return true;
  });
}

function filterObj(arr, id) {
  let obj;
  arr.forEach((item) => {
    if ((item.id = id)) {
      obj = item;
    }
  });
  return obj;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function closeModal() {
  modal.classList.add("none");
}
function searching() {
  if (searchInput.value != "" && searchInput.value.length > 3) {
    const newArr = userNameArr.filter((item) => {
      if (item.lastName.includes(searchInput.value)) {
        return true;
      }
      return false;
    });
    if (newArr.length > 0) {
      CreateListPage(newArr);
    }
  } else {
    CreateListPage(userNameArr);
  }
}
function changing(event) {
  if (event.target.value.length <= 0) {
    CreateListPage(userNameArr);
  }
}
