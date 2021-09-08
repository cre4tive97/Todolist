// Watch
function watch() {
  const date = new Date();
  const dateName = ["months", "days", "hours", "minutes", "seconds"];
  const dateFunction = [
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];

  const [months, days, hours, minutes, seconds] = dateFunction;
  const dateArray = [months, days, hours, minutes, seconds];

  const dateNumber = document.querySelectorAll(".date__num");
  const dateTitle = document.querySelectorAll(".date__title");

  for (let i = 0; i < dateNumber.length; i++) {
    dateNumber[i].innerHTML = dateArray[i];
    dateTitle[i].innerHTML = dateName[i];
  }
}

function init() {
  watch();
  setInterval(watch, 1000);
}

init();

// Todo List

const todosInput = document.querySelector(".todos__input");
const todosSubmit = document.querySelector(".todos__submit");
const created = document.querySelector(".created");
let todos = [];

function createTodos(newTodos) {
  const createdList = document.createElement("li");
  const createdSpan = document.createElement("span");
  createdSpan.innerText = newTodos;
  const createdBtn = document.createElement("button");
  createdBtn.innerText = "❌";
  createdBtn.addEventListener("click", (e) => {
    const clickLi = e.target.parentElement;
    clickLi.remove();
  });

  createdList.append(createdSpan);
  createdList.append(createdBtn);
  created.append(createdList);
}

todosSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const newTodos = todosInput.value;
  createTodos(newTodos);
  todosInput.value = "";
});
