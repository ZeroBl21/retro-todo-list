import { useState } from 'react'
import "./TodoForm.css"

interface Props {
  addTodo(todo: Todo): void
}

const TodoForm = (props: Props) => {
  const [input, setInput] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!input) return

    props.addTodo({
      id: crypto.randomUUID(),
      title: input,
      finished: false,
    })

    setInput('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="todo-input nes-container is-rounded"
    >
      <div>
        <label htmlFor='dark_field'>Name</label>
        <input
          type='text'
          value={input}
          onChange={handleChange}
          id='dark_field'
          className='nes-input'
        />
      </div>
      <button className='nes-btn is-primary'>Add Todo</button>
    </form>
  )
}

export default TodoForm
