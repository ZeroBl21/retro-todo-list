import './TodoFilter.css'

interface Props {
  filter: Filter
  setFilter(filter: Filter): void
}

const TodoFilter = (props: Props) => {
  return (
    <menu
      className='todo-filter'
    >
      <button
        className={`nes-btn ${props.filter === 'All' ? 'is-primary' : ''}`}
        onClick={() => props.setFilter('All')}
      >
        All
      </button>
      <button
        className={`nes-btn ${props.filter === 'Active' ? 'is-primary' : ''}`}
        onClick={() => props.setFilter('Active')}
      >
        Active
      </button>
      <button
        className={`nes-btn ${
          props.filter === 'Completed' ? 'is-primary' : ''
        }`}
        onClick={() => props.setFilter('Completed')}
      >
        Completed
      </button>
    </menu>
  )
}

export default TodoFilter
