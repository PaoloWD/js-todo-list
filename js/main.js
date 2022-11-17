const addTodo = document.querySelector(".btn-primary");
const inputTextEl = document.querySelector(".form-control");
const containerEl = document.querySelector(".bg-white");
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

  btnDelete.addEventListener("click", function () {
    console.log(divTask);
    divTask.remove();
  });
  containerEl.append(divTask);
  divTask.append(task);
  divTask.append(btnDelete);
}
