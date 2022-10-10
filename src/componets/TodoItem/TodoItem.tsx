import './TodoItem.css'

const TodoItem = (props: Omit<Todo, 'id'>) => {
  return (
    <div
      className='nes-container is-rounded'
      style={{
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div>{props.title}</div>
      <div className="btn-group">
        <button className='btn'>🖉</button>
        <button className='btn'>
          <i className='nes-icon close is-small' />
        </button>
      </div>
    </div>
  )
}

export default TodoItem
