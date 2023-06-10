import { Header } from '@/components/Header.component'
import { Todo } from '@/components/Todo.component'
import { TodoInput } from '@/components/TodoInput.component'
import { useTodo } from '@/hooks/useTodo'

export default function Home() {
  const {
    todoList,
    addTodo,
    removeTodo,
    completedList,
    addCompletedTodo,
    removeCompletedTodo,
  } = useTodo()

  return (
    <>
      <Header />
      <TodoInput addTodo={addTodo} />
      <Todo
        removeTodo={removeTodo}
        removeCompleted={removeCompletedTodo}
        completedList={completedList}
        todoList={todoList}
        addCompletedTodo={addCompletedTodo}
      />
    </>
  )
}
