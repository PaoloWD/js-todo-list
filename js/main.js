const addTodo = document.querySelector(".btn-primary");
const inputTextEl = document.querySelector(".form-control");
const containerEl = document.querySelector(".bg-white");
const footerEl = document.querySelector(".footer");
const btnClearEl = document.querySelector(
  ".justify-content-around .btn-primary"
);

const tasks = [];

let pending = 0;

inputTextEl.addEventListener("keypress", send);
addTodo.addEventListener("click", send);
//il numero 13 è per identificare il tasto invio della tastiera
function send(a) {
  if ((a.type === "keypress" && a.which === 13) || a.type === "click") {
    if (pending === 0) {
      pending = 0;
    }
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
  tasks.push(newTaskk);
  task.innerHTML = newTaskk.text;
  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btn", "btn-danger", "mb-2");
  btnDelete.textContent = "X";
  btnDelete.addEventListener("click", function () {
    if (newTaskk.boolean === true) {
    } else {
      pending--;
    }

    tasks.splice(inputTextEl.value, 1);
    pendingTask();
    divTask.remove();
  });

  const btnSucc = document.createElement("button");
  btnSucc.classList.add("btn", "btn-success", "mb-2");
  btnSucc.textContent = "V";
  btnSucc.addEventListener("click", function () {
    if (newTaskk.boolean === false) {
      pending--;
      task.classList.add("text-decoration-line-through");
      pendingTask();

      newTaskk.boolean = true;
    } else {
      task.classList.remove("text-decoration-line-through");
      pending++;

      pendingTask();
      newTaskk.boolean = false;
    }
  });
  containerEl.append(divTask);
  divTask.append(task, btnDelete, btnSucc);
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

//sostituire un oggetto
//font awesome
//pending task mannaggia a chi so io FINITO DOPO 3 ORE
//MANNAGGIA AL GRANDISSIMO
