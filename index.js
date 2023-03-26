const mainButton = document.querySelector(".btn-color");
const main = document.querySelector(".colors");
const currentColor = document.querySelector(".current-color");

function randomColorGenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red},${green},${blue})`;
  return randomColor;
}

mainButton.addEventListener("click", () => {
  const randomColor = randomColorGenerator();
  main.style.backgroundColor = randomColor;
  currentColor.textContent = randomColor;
});

const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
  <span class="text">${newTodoText}</span>
  <div class="todo-buttons">
    <button class="todo-btn complete" data-bs-toggle="modal" data-bs-target="#exampleModal">Complete</button>
    <button class="todo-btn remove">Remove</button>
  </div>`;
  newLi.innerHTML = newLiInnerHtml;
  todoList.append(newLi);
  todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("complete")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }

  if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
});
