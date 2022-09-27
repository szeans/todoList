const $ = x => document.querySelector(x);
const todoForm = $("#form");
const todoList = $("#todo");
const compList = $("#comp");

function todoChildren(text, status) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.value = text;
  li.appendChild(span);
  li.appendChild(button);

  if (status) {
    span.style.textDecoration("line-through");
    button.textContent = '❌';
    button.addEventListener("click", function() {
      return;
    })
  } else {
    button.textContent = '✅';
    button.addEventListener("click", function() {
      return todoChildren(text, true);
    })
  }

  return li;
}

function createTodo(name) {
  todoList.appendChild(todoChildren(name, false));
}

function compTodo(name) {

}

todoForm.addEventListener("submit", e => {
  e.preventDefault();
  createTodo(e);
})