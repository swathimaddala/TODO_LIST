const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const todoText = input.value.trim();
  if (todoText !== '') {
    addTodoItem(todoText);
    input.value = '';
  }
});

function addTodoItem(todoText) {
  const li = document.createElement('li');
  li.textContent = todoText;
  todoList.appendChild(li);
}