import { TodoInput } from '@/components/TodoInput'
import { Header } from '@/components/Header.component'
import { Todo } from '@/components/Todo.component'
import { useTodo } from '@/hooks/useTodo'

export default function Home() {
  const { todoList, addTodo, removeTodo } = useTodo()

  return (
    <>
      <Header />
      <TodoInput addTodo={addTodo}/>
      <Todo todoList={todoList}/>
    </>
  )
}