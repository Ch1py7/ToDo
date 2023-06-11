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
    <section className='grid grid-cols-1 md:grid-cols-2 px-16 mt-16 gap-48 h-[58rem]'>
      {/* To do list */}
      <article className=''>
        <h1 className='text-6xl text-center font-medium text-neutral-300'>
          To Do
        </h1>
        <div className='bg-[#202b2f] p-10 max-h-[54rem] rounded-[2rem] overflow-hidden'>
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
      <article className=''>
        <h1 className='text-6xl text-center font-medium text-neutral-300'>
          Completed
        </h1>
        <div className='bg-[#202b2f] p-10 max-h-[54rem] rounded-[2rem] overflow-hidden'>
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


// make me the next css style with tailwind: display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)
