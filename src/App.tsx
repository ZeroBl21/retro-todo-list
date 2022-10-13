import { useState } from 'react'
import TodoForm from './componets/TodoForm/TodoForm'
import TodoFilter from './componets/TodoFilter/TodoFilter'
import TodoList from './componets/TodoList/TodoList'

import './App.css'

import useTodos from './hooks/useTodos'

function App() {
  const { todos, addTodo, editTodo, deleteTodo, toggleTodo } = useTodos()
  const [dataToEdit, setDataToEdit] = useState<Todo | null>(null)
  const [filter, setFilter] = useState<Filter>('All')

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
      <TodoList
        visibleTodos={visibleTodos}
        setDataToEdit={setDataToEdit}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </main>
  )
}

export default App
