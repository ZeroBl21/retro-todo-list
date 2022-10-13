import { useEffect, useState } from 'react'

const initialProps = (): Todo[] => {
  const saved = localStorage.getItem('todos-storage')

  if (typeof saved === 'string') {
    const parse = JSON.parse(saved)

    if (parse) return parse
    else return []
  }

  return []
}

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(initialProps)

  useEffect(() => {
    localStorage.setItem('todos-storage', JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo: Todo) => {
    if (!todo.title) return

    const newTodos = [todo, ...todos]
    setTodos(newTodos)
  }

  const editTodo = (todo: Todo) => {
    const newData = todos.map((el) => (el.id === todo.id ? todo : el))
    setTodos(newData)
  }

  const toggleTodo = (id: Todo['id']) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.finished = !todo.finished
      }
      return todo
    })

    setTodos(newTodos)
  }

  const deleteTodo = (id: Todo['id']) => {
    const newTodos = todos.filter((todo) => todo.id !== id)

    setTodos(newTodos)
  }

  return { todos, addTodo, editTodo, toggleTodo, deleteTodo }
}

export default useTodos
