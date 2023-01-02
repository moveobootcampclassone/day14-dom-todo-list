function addTodo(e) {
  console.log(e);
  e.preventDefault();
  const newTodoTextEl = document.getElementById("user-new-todo-input");
  const todoListEl = document.getElementById("todo-list");
  console.log(todoListEl);
  console.log(newTodoTextEl.value, "newTodoTextEl.value");

  const newTodo = document.createElement("li");
  // newTodo.classList.add("list-group-item");
  newTodo.innerText = newTodoTextEl.value;
  // newTodoTextEl.value => drink (the user wrote)
  // <li>drink</li>
  // addEventListener
  todoListEl.appendChild(newTodo);
  console.log(newTodo, "newTodo");
  newTodo.addEventListener("click", () => {
    todoListEl.removeChild(newTodo);
  });
  newTodoTextEl.value = "";
}
