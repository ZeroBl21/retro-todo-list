import './TodoItem.css'

interface Props {
  todo: Todo
  toggleTodo(todo: Todo['id']): void
  deleteTodo(todo: Todo['id']): void
}

const TodoItem = (props: Props) => {
  return (
    <article className='todo nes-container is-rounded'>
      <div
        onClick={() => props.toggleTodo(props.todo.id)}
        className={`${props.todo.finished ? 'completed' : ''}`}
      >
        {props.todo.title}
      </div>
      <menu className='btn-group'>
        <button className='btn'>🖉</button>
        <button className='btn' onClick={() => props.deleteTodo(props.todo.id)}>
          <i className='nes-icon close is-small' />
        </button>
      </menu>
    </article>
  )
}

export default TodoItem
