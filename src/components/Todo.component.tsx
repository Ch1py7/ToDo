import { TodoTypes } from '@/types/Todos'
import { FC, ReactElement } from 'react'

interface TodoProps {
  todoList: TodoTypes[]
}

export const Todo: FC<TodoProps> = ({ todoList }): ReactElement => {
  return (
    <section className='flex justify-center mt-16 gap-48 min-h-[calc(100vh-95px)]'>
      <article className='w-[78rem] h-[54rem]'>
        <h1 className='text-6xl text-center font-medium'>To Do</h1>
        <div className='bg-[#FF90B3] w-full h-full rounded-[2rem]'>
          {todoList.map((todo, index) => (
            <h1 key={index}>{todo.todo}</h1>
          ))}
        </div>
      </article>
      <article className='w-[78rem] h-[54rem]'>
        <h1 className='text-6xl text-center font-medium'>Completed</h1>
        <div className='bg-[#FF90B3] w-full h-full rounded-[2rem]'></div>
      </article>
    </section>
  )
}
