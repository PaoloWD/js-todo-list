const addTodo = document.querySelector(".btn-primary");
const inputTextEl = document.querySelector(".form-control");
const containerEl = document.querySelector(".bg-white");
const footerEl = document.querySelector(".footer");
let pending = 0;
const tasks = [];
console.log(pending);
inputTextEl.addEventListener("keypress", send);
addTodo.addEventListener("click", send);
//il numero 13 è per identificare il tasto invio della tastiera
function send(a) {
  if ((a.type === "keypress" && a.which === 13) || a.type === "click") {
    newTask();
    pending++;
    pendingTask();
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

      newTaskk.boolean = true;
      tasks.push(newTaskk);
    } else {
      task.classList.remove("text-decoration-line-through");
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
