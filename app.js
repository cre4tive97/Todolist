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
  let createdList = document.createElement("li");
  createdList.id = newTodos.id;
  let createdSpan = document.createElement("span");
  createdSpan.innerText = newTodos.text;
  let createdBtn = document.createElement("button");
  createdBtn.innerText = "❌";
  createdBtn.addEventListener("click", (e) => {
    const li = e.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    localStorage.setItem("todos", JSON.stringify(todos));
  });
  createdList.append(createdSpan);
  createdList.append(createdBtn);
  created.append(createdList);
}

todosSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const newTodos = todosInput.value;
  const newTodosObj = { text: newTodos, id: Date.now() };
  if (newTodos !== "") {
    todosInput.value = "";
    todos.push(newTodosObj);
    createTodos(newTodosObj);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
});

const savedTodos = localStorage.getItem("todos");
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(createTodos);
}
