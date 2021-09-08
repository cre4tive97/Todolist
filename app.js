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

// Random Quotes

const quotes = [
  "When you go through hardships and decide not to surrender, that is strength. — Arnold Schwarzenegger",
  "It is kind of fun to do the impossible. — Walt Disney",
  "There are better starters than me but I’m a strong finisher. — Usain Bolt",
  "Tough times never last, but tough people do. — Robert H. Schuller",
  "I’ve failed over and over and over again in my life and that is why I succeed. – Michael Jordan",
  "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is. – Angelina Jolie",
  "But I know, somehow, that only when it is dark enough can you see the stars. ― Martin Luther King, Jr",
  "I didn’t get there by wishing for it or hoping for it, but by working for it.  – Estée Lauder",
  `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
    ― Marilyn Monroe`,
  `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
    ― Albert Einstein`,
  `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
    ― Bernard M. Baruch`,
  `“You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.”
    ― William W. Purkey`,
];
const quoteText = document.querySelector(".quote__text");

function randomItem(a) {
  return a[Math.floor(Math.random() * a.length)];
}

quoteText.innerHTML = randomItem(quotes);
