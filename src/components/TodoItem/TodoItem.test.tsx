import '@testing-library/jest-dom/extend-expect'

import TodoItem from './TodoItem'

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

const emptyFn = () => {}
const testTodo: Todo = {
  id: '1234',
  title: 'Testing Todo',
  finished: false,
}

describe('TodoItem', () => {
  it('should render without crashing', () => {
    render(
      <TodoItem
        todo={testTodo}
        toggleTodo={emptyFn}
        deleteTodo={emptyFn}
        setDataToEdit={emptyFn}
      />
    )
  })

  it("should don't have a class completed if not finished", () => {
    const { container } = render(
      <TodoItem
        todo={testTodo}
        toggleTodo={emptyFn}
        deleteTodo={emptyFn}
        setDataToEdit={emptyFn}
      />
    )

    const testing = container.getElementsByClassName('completed')
    expect(testing[0]).not.toBeDefined()
  })

  it('should have a class completed if is finished', () => {
    const testTodo: Todo = {
      id: '1234',
      title: 'Testing Todo',
      finished: true,
    }

    const { container } = render(
      <TodoItem
        todo={testTodo}
        toggleTodo={emptyFn}
        deleteTodo={emptyFn}
        setDataToEdit={emptyFn}
      />
    )

    const testing = container.getElementsByClassName('completed')
    expect(testing[0]).toBeDefined()
  })
})
