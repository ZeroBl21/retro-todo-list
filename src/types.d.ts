interface Todo {
  id: string
  title: string
  finished?: boolean
}

type Filter = 'All' | 'Active' | 'Completed'
