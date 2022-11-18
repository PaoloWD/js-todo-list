const addTodo = document.querySelector(".btn-primary");
const inputTextEl = document.querySelector(".form-control");
const containerEl = document.querySelector(".bg-white");
const footerEl = document.querySelector(".footer");
const btnClearEl = document.querySelector(
  ".justify-content-around .btn-primary"
);

const tasks = [];
let antiscam = 0;
let pending = 0;

inputTextEl.addEventListener("keypress", send);
addTodo.addEventListener("click", send);
//il numero 13 è per identificare il tasto invio della tastiera
function send(a) {
  if ((a.type === "keypress" && a.which === 13) || a.type === "click") {
    if (inputTextEl.value === "") {
      if (antiscam === 1) {
        alert(
          "Mi dispiace, hai esagerato. Il tuo computer si autodistruggerà tra 3 secondi"
        );
      } else {
        alert(
          "Anche se ti chiami Florian, non puoi esimerti dal scrivere qualcosa. La prossima volta succederà qualcosa di molto brutto"
        );
      }
      antiscam++;
    } else {
      pending++;
      newTask();
      pendingTask();
      inputClear();
    }
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
  console.log("prima di aver cancellato", tasks);
  task.innerHTML = newTaskk.text;
  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btn", "btn-danger", "mb-2");
  btnDelete.textContent = "X";

  btnDelete.addEventListener("click", function () {
    if (newTaskk.boolean === true) {
      console.log("cancel", pending);
    } else {
      pending--;
      console.log("cancel else", pending);
    }

    tasks.splice(inputTextEl.value, 1);
    pendingTask();
    divTask.remove();

    console.log("dopo aver cancellato", tasks);
  });

  task.addEventListener("click", function () {
    if (newTaskk.boolean === false) {
      pending--;
      task.classList.add("text-decoration-line-through");
      pendingTask();

      newTaskk.boolean = true;
      console.log(
        "primo click testo chiave dentro l'oggetto",
        newTaskk.boolean
      );
    } else {
      task.classList.remove("text-decoration-line-through");
      pending++;

      pendingTask();
      newTaskk.boolean = false;
      console.log(
        "secondo click testo chiave dentro l'oggetto",
        newTaskk.boolean
      );
    }
  });
  containerEl.append(divTask);
  divTask.append(task, btnDelete);
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
//rimuovere determinato oggetto
//pending task mannaggia a chi so io FINITO DOPO 3 ORE
//MANNAGGIA AL GRANDISSIMO
