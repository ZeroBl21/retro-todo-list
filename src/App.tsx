import { useState } from 'react'
import TodoForm from './componets/TodoForm/TodoForm'
import TodoItem from './componets/TodoItem/TodoItem'

import './App.css'

const initialProps: Todo[] = [
  { id: crypto.randomUUID(), title: 'Test', finished: false },
  { id: crypto.randomUUID(), title: 'Test 2', finished: false },
  { id: crypto.randomUUID(), title: 'Test 3', finished: false },
]

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialProps)

  const addTodo = (todo: Todo) => {
    if (!todo.title) return

    const newTodos = [todo, ...todos]

    setTodos(newTodos)
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

  const editTodo = () => {}

  return (
    <main className='app'>
      <h1 className='title is-centered'>NES to do list</h1>
      <TodoForm addTodo={addTodo} />
      <div className='todo-container'>
        {todos &&
          todos.map((todo: Todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
      </div>
    </main>
  )
}

export default App
