import { PencilIcon } from '../SVG'
import './TodoItem.css'

interface Props {
  todo: Todo
  toggleTodo(todo: Todo['id']): void
  deleteTodo(todo: Todo['id']): void
  setDataToEdit(todo: Todo | null): void
}

const TodoItem = (props: Props) => {
  return (
    <article className='todo nes-container is-rounded'>
      <div
        className={`${props.todo.finished ? 'completed' : ''}`}
        onClick={() => props.toggleTodo(props.todo.id)}
      >
        {props.todo.title}
      </div>
      <menu className='btn-group'>
        <button className='btn' onClick={() => props.setDataToEdit(props.todo)}>
          <PencilIcon/>
        </button>
        <button className='btn' onClick={() => props.deleteTodo(props.todo.id)}>
          <i className='nes-icon close is-small' />
        </button>
      </menu>
    </article>
  )
}

export default TodoItem
