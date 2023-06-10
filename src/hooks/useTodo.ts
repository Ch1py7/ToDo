import { LocalStorageService } from '@/services/localStorage.service'
import { TodoTypes } from '@/types/Todos'
import { useState } from 'react'

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Array<TodoTypes>>([])
  const [completedList, setCompletedList] = useState<Array<TodoTypes>>([])

  const addTodo = (todo: string) => {
    const id = crypto.randomUUID()
    setTodoList((prev) => [...prev, { todo, id }])
    LocalStorageService.setTodos('todos', { [id]: todo })
  }

  const addCompletedTodo = (todo: string, index: number, id: string) => {
    setCompletedList((prev) => [...prev, todoList[index]])
    LocalStorageService.setTodos('completedTodos', { [id]: todo })
  }

  const removeTodo = (index: number) => {
    setTodoList((prev) => prev.filter((_, i) => i !== index))
    LocalStorageService.removeTodo('todos', todoList[index].id)
  }

  const removeCompletedTodo = (index: number) => {
    setCompletedList((prev) => prev.filter((_, i) => i !== index))
    LocalStorageService.removeTodo('completedTodos', completedList[index].id)
  }

  return {
    todoList,
    completedList,
    addTodo,
    removeTodo,
    removeCompletedTodo,
    addCompletedTodo,
  }
}
