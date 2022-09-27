const $ = x => document.querySelector(x);
const todoForm = $("#form");
const todoList = $("#todo");
const compList = $("#comp");
const input = $("#in");

function todoChildren(text, status) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.textContent = text;

  li.appendChild(span);
  li.appendChild(button);

  if (status) {
    span.style.textDecoration = "line-through";
    button.textContent = '❌';
    button.addEventListener("click", function() {
      removeTodo(li);
    });
  } else {
    button.textContent = '✅';
    button.addEventListener("click", function() {
      compTodo(li, text);
    });
  }

  return li;
}

function createTodo(name) {
  todoList.appendChild(todoChildren(name, false));
}

function compTodo(li, name) {
  removeTodo(li);
  compList.appendChild(todoChildren(name, true));
}

function removeTodo(li) {
  li.remove();
}

todoForm.addEventListener("submit", e => {
  e.preventDefault();
  createTodo(input.value);
  input.value = "";
})