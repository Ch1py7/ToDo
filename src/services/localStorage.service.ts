import { StorageTodos } from '@/types/Todos'

export module LocalStorageService {
  export const getTodos = () => {
    const todos = localStorage.getItem('todos')
    if (todos) {
      return JSON.parse(todos)
    }
    return {}
  }

  export const getItem = <T>(key: string) => {
    return localStorage.getItem(key) as T | null
  }

  export const setTodos = (todos: StorageTodos) => {
    const prevTodos = getTodos()
    const newTodos = { ...prevTodos, ...todos }
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  export const removeTodo = (id: string) => {
    const todos = getTodos()
    delete todos[id]
    localStorage.setItem('todos', JSON.stringify(todos))
  }
}