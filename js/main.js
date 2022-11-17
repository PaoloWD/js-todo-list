const addTodo = document.querySelector(".btn-primary");
const inputTextEl = document.querySelector(".form-control");
const containerEl = document.querySelector(".bg-white");
const footerEl = document.querySelector(".footer");
const btnClearEl = document.querySelector(
  ".justify-content-around .btn-primary"
);
console.log(btnClearEl);
let pending = 0;
const tasks = [];
console.log(pending);
inputTextEl.addEventListener("keypress", send);
addTodo.addEventListener("click", send);
//il numero 13 è per identificare il tasto invio della tastiera
function send(a) {
  if ((a.type === "keypress" && a.which === 13) || a.type === "click") {
    pending++;
    newTask();
    pendingTask();
    inputClear();
  }
}
pendingTask();
function newTask() {
  const divTask = document.createElement("div");
  divTask.classList.add("d-flex", "hover");
  const task = document.createElement("div");
  task.classList.add(
    "bg-form",
    "mb-2",
    "justify-content-center",
    "d-flex",
    "align-items-center"
  );
  let newTaskk = {
    text: inputTextEl.value,
    boolean: false,
  };

  task.innerHTML = newTaskk.text;
  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btn", "btn-danger", "mb-2");
  btnDelete.textContent = "X";
  btnDelete.addEventListener("click", function () {
    pending--;
    pendingTask();
    console.log(divTask);
    divTask.remove();
  });

  const btnSucc = document.createElement("button");
  btnSucc.classList.add("btn", "btn-success", "mb-2");
  btnSucc.textContent = "V";
  btnSucc.addEventListener("click", function () {
    if (newTaskk.boolean === false) {
      task.classList.add("text-decoration-line-through");
      pending--;
      pendingTask();

      newTaskk.boolean = true;
      tasks.push(newTaskk);
    } else {
      task.classList.remove("text-decoration-line-through");
      pending++;
      pendingTask();
      newTaskk.boolean = false;
      tasks.push(newTaskk);
    }
    console.log(tasks);
  });
  containerEl.append(divTask);
  divTask.append(task, btnDelete, btnSucc);

  console.log(tasks);
}

function pendingTask() {
  footerEl.innerHTML = `You have ${pending} pending task`;
}

function clearAll() {
  const papa = document.querySelectorAll(".hover");
  papa.forEach((hover) => {
    hover.remove();
  });
}

btnClearEl.addEventListener("click", function () {
  inputClear();
  pending = 0;
  pendingTask();
  clearAll();
});

function inputClear() {
  inputTextEl.value = "";
}
