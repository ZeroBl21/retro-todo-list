import '@testing-library/jest-dom/extend-expect'

import TodoForm from './TodoForm'

import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

const emptyFnc = () => {}
const mockedAdd = vi.fn()

const mockedTodo: Todo = {
  id: '1234',
  title: 'Testing Todo',
  finished: false,
}

describe('<TodoForm/>', () => {
  it('should render without crashing', () => {
    render(
      <TodoForm
        addTodo={emptyFnc}
        editTodo={emptyFnc}
        setDataToEdit={emptyFnc}
        dataToEdit={null}
      />
    )
  })

  it('should contains input field and it has focus on mount', () => {
    render(
      <TodoForm
        addTodo={emptyFnc}
        editTodo={emptyFnc}
        setDataToEdit={emptyFnc}
        dataToEdit={null}
      />
    )

    const inputField: HTMLInputElement =
      screen.getByPlaceholderText('Add a new task...')
    expect(inputField).toHaveFocus()
  })

  it('should not call addTodo method if input field is empty', () => {
    render(
      <TodoForm
        addTodo={mockedAdd}
        editTodo={emptyFnc}
        setDataToEdit={emptyFnc}
        dataToEdit={null}
      />
    )

    const btn: HTMLButtonElement = screen.getByText(/Add Todo/i)
    fireEvent.click(btn)

    expect(mockedAdd).not.toHaveBeenCalled()
  })

  it('should change button text if dataToEdit is provided', () => {
    render(
      <TodoForm
        addTodo={mockedAdd}
        editTodo={emptyFnc}
        setDataToEdit={emptyFnc}
        dataToEdit={mockedTodo}
      />
    )

    const btn: HTMLButtonElement = screen.getByText(/Edit Todo/i)

    expect(btn).toBeDefined()
  })
})
