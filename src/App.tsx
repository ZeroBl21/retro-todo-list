import { useState } from 'react'
import TodoForm from './componets/TodoForm/TodoForm'
import TodoItem from './componets/TodoItem/TodoItem'
import TodoFilter from './componets/TodoFilter/TodoFilter'

import './App.css'

const initialProps: Todo[] = [
  { id: crypto.randomUUID(), title: 'Test', finished: false },
  { id: crypto.randomUUID(), title: 'Test 2', finished: false },
  { id: crypto.randomUUID(), title: 'Test 3', finished: false },
]

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialProps)
  const [dataToEdit, setDataToEdit] = useState<Todo | null>(null)
  const [filter, setFilter] = useState<Filter>('All')

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

  let visibleTodos = todos

  if (filter === 'Active') {
    visibleTodos = todos.filter((todo) => !todo.finished)
  } else if (filter === 'Completed') {
    visibleTodos = todos.filter((todo) => todo.finished)
  }

  return (
    <main className='app'>
      <h1 className='title is-centered'>NES to do list</h1>
      <TodoForm
        addTodo={addTodo}
        editTodo={editTodo}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <section className='todo-container'>
        {visibleTodos.length
          ? visibleTodos.map((todo: Todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                setDataToEdit={setDataToEdit}
              />
            ))
          : ''}
      </section>
    </main>
  )
}

export default App
