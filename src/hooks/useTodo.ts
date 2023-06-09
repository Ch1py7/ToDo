import { useEffect, useState } from 'react'

export const useTodo = () => {
  const [todoList, setTodoList] = useState<string[]>([])

  const addTodo = (todo: string) => {
    setTodoList((prev) => [...prev, todo])
  }

  const removeTodo = (index: number) => {
    setTodoList((prev) => prev.filter((_, i) => i !== index))
  }

  useEffect(() => {
    console.log(todoList)
  }, [todoList])

  return { todoList, addTodo, removeTodo }
}