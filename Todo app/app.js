const inp = document.querySelector("#inp");
const btn = document.querySelector("button");
const todoList = document.querySelector("#todoList");
const todo = document.querySelector(".todo");

function addTask() {
  let inpVal = inp.value.trim();
  if (inpVal.length == 0) {
    alert("You need to write something");
    return false;
  } else {
    const li = document.createElement("li");
    li.innerHTML = inpVal;
    li.classList.add("todo");

    li.innerHTML = `${inpVal} <span><svg id="pencil__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z"></path></svg><svg id="delete__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path></svg>`;
    todoList.prepend(li);
    saveToLS();
    inp.value = "";
  }
}

function saveToLS() {
  localStorage.setItem("todos", todoList.innerHTML);
}

todoList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.id == "delete__icon") {
    const bool = confirm(
      `Are you sure? you want to delete ${e.target.parentElement.parentElement.innerText}`
    );
    bool ? e.target.parentElement.parentElement.remove() : false;
  } else if (e.target.id == "pencil__icon") {
    const user = prompt(
      "Update",
      e.target.parentElement.parentElement.innerText
    );
    if (!user) return;
    e.target.parentElement.parentElement.innerHTML = `${user} <span><svg id="pencil__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z"></path></svg><svg id="delete__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path></svg>`;
  }
  saveToLS();
});

function showTodos() {
  todoList.innerHTML = localStorage.getItem("todos");
}
showTodos();

btn.addEventListener("click", addTask);
