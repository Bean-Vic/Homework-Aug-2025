/* exported todos, writeTodos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = readTodos();

function wrtieTodos(): void {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem("todo-storage", todosJSON);
}

function readTodos(): Todo[] {
  const todoJSON = localStorage.getItem("todos-storage");
  if (todoJSON) {
    return JSON.parse(todoJSON);
  }
  return [];
}
