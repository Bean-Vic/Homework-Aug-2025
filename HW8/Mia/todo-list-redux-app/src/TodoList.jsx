export default function TodoList({ completedTodos, activeTodos }) {
  return (
    <div>
      <h1>My todos</h1>
      <p>new todo</p>
      <h3>InCompleted</h3>
      {completedTodos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} />
      ))}
      <h3>Completed</h3>
      {inCompleteTodos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} />
      ))}
    </div>
  );
}
