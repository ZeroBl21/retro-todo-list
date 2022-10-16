import '@testing-library/jest-dom/extend-expect'

import TodoList from './TodoList'

import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

const emptyFn = vi.fn()
const emptyTodo: Todo[] = []

const noTodosMessage = 'Nothing Here...'

describe('TodoForm', () => {
  it('Should render without crashing', () => {
    render(
      <TodoList
        visibleTodos={emptyTodo}
        setDataToEdit={emptyFn}
        toggleTodo={emptyFn}
        deleteTodo={emptyFn}
      />
    )
  })

  it('should render Nothing Here if visibleTodos is empty', () => {
    render(
      <TodoList
        visibleTodos={emptyTodo}
        setDataToEdit={emptyFn}
        toggleTodo={emptyFn}
        deleteTodo={emptyFn}
      />
    )

    const paragraph: HTMLParagraphElement = screen.getByText(noTodosMessage)

    expect(paragraph).toBeDefined()
  })

  it('should render a TodoItem with Testing title', () => {
    const testTodo: Todo[] = [
      {
        id: '1234',
        title: 'Testing',
        finished: false,
      },
    ]

    render(
      <TodoList
        visibleTodos={testTodo}
        setDataToEdit={emptyFn}
        toggleTodo={emptyFn}
        deleteTodo={emptyFn}
      />
    )

    const todoChild = screen.getByText(testTodo[0].title)

    expect(todoChild).toBeDefined()
  })

})
