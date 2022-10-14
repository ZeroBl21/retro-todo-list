import { useEffect, useState } from 'react'
import './TodoForm.css'

interface Props {
  dataToEdit: Todo | null
  addTodo(todo: Todo): void
  editTodo(todo: Todo): void
  setDataToEdit(todo: Todo | null): void
}

const initialInput: Todo = {
  id: '',
  title: '',
  finished: false,
}

const TodoForm = (props: Props) => {
  const [input, setInput] = useState(initialInput)

  useEffect(() => {
    if (props.dataToEdit) {
      setInput(props.dataToEdit)
    } else {
      setInput(initialInput)
    }
  }, [props.dataToEdit])

  const resetInput = () => {
    setInput(initialInput)
    props.setDataToEdit(null)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!input.title) return resetInput()

    if (input.id) {
      props.editTodo({
        id: input.id,
        title: input.title,
        finished: input.finished,
      })
    } else {
      props.addTodo({
        id: crypto.randomUUID(),
        title: input.title,
        finished: input.finished,
      })
    }

    resetInput()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='todo-input nes-container is-rounded'
    >
      <div>
        <label htmlFor='dark_field'>Title</label>
        <input
          type='text'
          name='title'
          value={input.title}
          onChange={handleChange}
          id='dark_field'
          className='nes-input'
          placeholder='Add a new task...'
          autoFocus
        />
      </div>
      <button className='nes-btn is-primary'>
        { props.dataToEdit ? 'Edit Todo' : 'Add Todo' }
      </button>
    </form>
  )
}

export default TodoForm
