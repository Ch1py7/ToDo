import { FC, ReactElement, useState } from 'react'

interface TodoInputProps {
  addTodo: (todo: string) => void
}

export const TodoInput: FC<TodoInputProps> = ({ addTodo }): ReactElement => {
  const [todo, setTodo] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTodo(todo)
    setTodo('')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value)
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col justify-center'>
      <input
        onChange={handleChange}
        value={todo}
        placeholder='Add your todo'
        className='text-5xl mt-16 h-[6rem] w-[40rem] mx-auto px-6 rounded-3xl'
      />
    </form>
  )
}

