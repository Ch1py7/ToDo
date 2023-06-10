import { StorageTodos } from '@/types/Todos'

export module LocalStorageService {
  export const getTodos = () => {
    const todos = localStorage.getItem('todos')
    if (todos) {
      return JSON.parse(todos)
    }
    return {}
  }

  export const getCompletedTodos = () => {
    const completedTodos = localStorage.getItem('completedTodos')
    if (completedTodos) {
      return JSON.parse(completedTodos)
    }
    return {}
  }

  export const getItem = <T>(key: string) => {
    return localStorage.getItem(key) as T | null
  }

  export const setTodos = (
    key: 'completedTodos' | 'todos',
    todos: StorageTodos
  ) => {
    if (key === 'completedTodos') {
      const prevTodos = getCompletedTodos()
      const newTodos = { ...prevTodos, ...todos }
      localStorage.setItem(key, JSON.stringify(newTodos))
    } else if (key === 'todos') {
      const prevTodos = getTodos()
      const newTodos = { ...prevTodos, ...todos }
      localStorage.setItem(key, JSON.stringify(newTodos))
    } else {
      return {}
    }
  }

  export const removeTodo = (key: 'completedTodos' | 'todos', id: string) => {
    if (key === 'completedTodos') {
      const todos = getCompletedTodos()
      delete todos[id]
      localStorage.setItem(key, JSON.stringify(todos))
    } else if (key === 'todos') {
      const todos = getTodos()
      delete todos[id]
      localStorage.setItem(key, JSON.stringify(todos))
    } else {
      return {}
    }
  }
}
