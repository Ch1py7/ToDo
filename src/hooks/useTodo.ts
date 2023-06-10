import { TodoTypes } from '@/types/Todos'
import { useEffect, useState } from 'react'

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Array<TodoTypes>>([])

  const addTodo = (todo: string) => {
    const id = crypto.randomUUID()
    setTodoList(prev => [...prev, {todo, id}])
  }

  const removeTodo = (index: number) => {
    setTodoList(prev => prev.filter((_, i) => i !== index))
  }

  useEffect(() => {
    console.log(todoList)
  }, [todoList])

  return { todoList, addTodo, removeTodo }
}
