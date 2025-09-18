export default function TodoListItem({
  todo,
  onCompletedClicked,
  onDeleteClicked,
}) {
  //2 function props for when the complete button is clicked
  <h3>{todo.text}</h3>;
{todo.isCompleted? <p>Complete!</p>}
//display a delete button if a todo is already complete
{todo.isCompleted ?  <button onClick={onDeleteClicked}>  Delete Item </button> : <button onClick={onCompletedClicked(todo.text)}> Mark as Completed

</button>}

  return <div></div>;
}
