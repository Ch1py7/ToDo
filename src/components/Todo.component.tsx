import { TodoTypes } from '@/types/Todos'
import { Icon } from '@iconify/react'
import { FC, ReactElement } from 'react'

interface TodoProps {
  todoList: TodoTypes[]
  addCompletedTodo: (todo: string, index: number, id: string) => void
  completedList: TodoTypes[]
  removeTodo: (index: number) => void
  removeCompleted: (index: number) => void
}

export const Todo: FC<TodoProps> = ({
  todoList,
  addCompletedTodo,
  completedList,
  removeTodo,
  removeCompleted,
}): ReactElement => {
  return (
    <section className='flex justify-center mt-16 gap-48 min-h-[calc(100vh-95px)]'>
      {/* To do list */}
      <article className='w-[78rem] h-[54rem]'>
        <h1 className='text-6xl text-center font-medium'>To Do</h1>
        <div className='bg-[#FF90B3] w-full h-full p-10 rounded-[2rem]'>
          <ol>
            {todoList.map((todo, index) => (
              <li className='flex justify-between' key={index}>
                <p className='text-5xl p-2'>{todo.todo}</p>
                <div className='flex gap-6 justify-center items-center'>
                  <Icon
                    icon='ph:check-bold'
                    className='text-5xl text-green-500 cursor-pointer'
                    onClick={() => (
                      removeTodo(index),
                      addCompletedTodo(todo.todo, index, todo.id)
                    )}
                  />
                  <Icon
                    icon='bi:trash-fill'
                    className='text-5xl text-gray-500 cursor-pointer'
                    onClick={() => removeTodo(index)}
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </article>
      {/* To do completed list*/}
      <article className='w-[78rem] h-[54rem]'>
        <h1 className='text-6xl text-center font-medium'>Completed</h1>
        <div className='bg-[#FF90B3] w-full h-full p-10 rounded-[2rem]'>
          <ol>
            {completedList.map((todo, index) => (
              <li className='flex justify-between' key={index}>
                <p className='text-5xl p-2'>{todo.todo}</p>
                <Icon
                  icon='bi:trash-fill'
                  className='text-5xl text-gray-500 cursor-pointer'
                  onClick={() => removeCompleted(index)}
                />
              </li>
            ))}
          </ol>
        </div>
      </article>
    </section>
  )
}
