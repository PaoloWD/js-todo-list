const addTodo = document.querySelector(".btn-primary");
const inputTextEl = document.querySelector(".form-control");
const containerEl = document.querySelector(".bg-white");
console.log(addTodo);
addTodo.addEventListener("click", function () {
  newTask();
});

function newTask() {
  const divTask = document.createElement("div");
  divTask.classList.add("d-flex", "hover");
  const task = document.createElement("div");
  task.classList.add("bg-form", "mb-2");
  task.innerHTML = inputTextEl.value;
  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btn", "btn-danger", "mb-2");
  const btnDeleteEl = document.querySelector(".btn-danger");

  containerEl.append(divTask);
  divTask.append(task);
  divTask.append(btnDelete);
  console.log(btnDeleteEl);
}

function onClickBtnDelete() {
  const clickEl = this.closest(".hover");
  clickEl.remove;
}
