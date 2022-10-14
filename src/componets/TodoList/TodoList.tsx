import './TodoList.css'
import TodoItem from '../TodoItem/TodoItem'

interface Props {
  visibleTodos: Todo[]
  setDataToEdit(todo: Todo): void
  toggleTodo(id: Todo['id']): void
  deleteTodo(id: Todo['id']): void
}

const TodoList = (props: Props) => {
  return (
    <section className='todo-container'>
      {props.visibleTodos.length
        ? props.visibleTodos.map((todo: Todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={props.toggleTodo}
              deleteTodo={props.deleteTodo}
              setDataToEdit={props.setDataToEdit}
            />
          ))
        : (
        <p className='todo-empty'>Nothing Here...</p>
        )}
    </section>
  )
}

export default TodoList
