import './TodoItem.css'

interface Props {
  todo: Todo,
  deleteTodo(todo: Todo["id"]): void
}

const TodoItem = (props: Props) => {
  return (
    <div
      className='nes-container is-rounded'
      style={{
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div>{props.todo.title}</div>
      <div className="btn-group">
        <button className='btn'>🖉</button>
        <button className='btn' onClick={() => props.deleteTodo(props.todo.id)}>
          <i className='nes-icon close is-small' />
        </button>
      </div>
    </div>
  )
}

export default TodoItem
