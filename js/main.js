const addTodo = document.querySelector(".btn-primary");
const inputTextEl = document.querySelector(".form-control");
const containerEl = document.querySelector(".bg-white");
const tasks = [];

inputTextEl.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    console.log(addTodo);
    addTodo.click(newTask());
  }
});

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
    boolean: true,
  };

  task.innerHTML = newTaskk.text;
  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btn", "btn-danger", "mb-2");
  btnDelete.textContent = "X";
  btnDelete.addEventListener("click", function () {
    console.log(divTask);
    divTask.remove();
  });
  const btnSucc = document.createElement("button");
  btnSucc.classList.add("btn", "btn-success", "mb-2");
  btnSucc.textContent = "V";
  btnSucc.addEventListener("click", function () {
    newTaskk.boolean = false;
    if (newTaskk.boolean === false) {
      task.classList.add("text-decoration-line-through");
      console.log(tasks);
    }
  });
  containerEl.append(divTask);
  divTask.append(task);
  divTask.append(btnDelete);
  divTask.append(btnSucc);
  tasks.push(newTaskk);
  console.log(tasks);
}
