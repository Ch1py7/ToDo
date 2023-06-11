import { Icon } from '@iconify/react'
import { FC, ReactElement } from 'react'

export const Header: FC = (): ReactElement => {
  return (
    <header className='flex justify-between py-9 px-16 bg-[#0a0a0a]'>
      <h1 className='flex items-center gap-x-4'>
        <Icon
          className='text-6xl text-neutral-300 hover:text-red-500 transition-colors duration-300'
          icon='ri:calendar-todo-fill'
        />
        <span className='text-6xl font-medium text-neutral-300'>
          Whispering Goals
        </span>
      </h1>
      <nav className='flex items-center gap-x-9'>
        <a
          href='https://twitter.com/bulbsum/'
          target='_blank'
          className='bg-orange-500 p-4 rounded-2xl'
        >
          <Icon className='text-4xl' icon='logos:twitter' />
        </a>
        <a
          className='bg-blue-400 p-4  rounded-2xl'
          href='https://github.com/ch1py7/'
          target='_blank'
        >
          <Icon className='text-4xl' icon='bi:github' />
        </a>
      </nav>
    </header>
  )
}

