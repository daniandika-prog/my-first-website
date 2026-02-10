let name = "Dani";

function greet() {
  let hour = new Date().getHours();

  if (hour < 12) {
    alert("Selamat pagi " + name);
  } else if (hour < 18) {
    alert("Selamat siang " + name);
  } else {
    alert("Selamat malam " + name);
  }
}
for (let i = 1; i <= 10; i++) {
  console.log("Belajar ke-" + i);
}
function add() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);

  document.getElementById("result").innerText =
    "Hasil: " + (a + b);
}

function subtract() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);

  document.getElementById("result").innerText =
    "Hasil: " + (a - b);
}
function multiply() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);

  document.getElementById("result").innerText =
    "Hasil: " + (a * b);
}

function divide() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);

  if (b === 0) {
    alert("Tidak bisa dibagi 0");
    return;
  }

  document.getElementById("result").innerText =
    "Hasil: " + (a / b);
}
function addTodo() {
  let input = document.getElementById("todoInput");
  let text = input.value;

  if (text === "") {
    alert("Todo tidak boleh kosong");
    return;
  }

  let li = document.createElement("li");
  li.innerText = text;

  let btn = document.createElement("button");
  btn.innerText = "X";
  btn.onclick = function() {
    li.remove();
  };

  li.appendChild(btn);
  document.getElementById("todoList").appendChild(li);

  input.value = "";
}
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  let list = document.getElementById("todoList");
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    let li = document.createElement("li");
    li.innerText = todo;

    let btn = document.createElement("button");
    btn.innerText = "X";
    btn.onclick = function () {
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    };

    li.appendChild(btn);
    list.appendChild(li);
  });
}

function addTodo() {
  let input = document.getElementById("todoInput");
  let text = input.value;

  if (text === "") {
    alert("Todo tidak boleh kosong");
    return;
  }

  todos.push(text);
  saveTodos();
  renderTodos();
  input.value = "";
}

renderTodos();
