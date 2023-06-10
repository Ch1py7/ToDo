import { Icon } from '@iconify/react'
import { FC, ReactElement } from 'react'

export const Header: FC = (): ReactElement => {
  return (
    <header className='flex justify-between py-9 px-16 bg-[#B892FF]'>
      <h1 className='flex items-center gap-x-4'>
        <Icon
          style={{ fontSize: '5rem', color: 'purple' }}
          icon='ri:calendar-todo-fill'
        />
        <span className='text-6xl font-medium'>Whispering Goals</span>
      </h1>
      <nav className='flex items-center gap-x-9'>
        <a href='https://twitter.com/bulbsum/' target='_blank'>
          <Icon style={{ fontSize: '4rem' }} icon='logos:twitter' />
        </a>
        <a href='https://github.com/ch1py7/' target='_blank'>
          <Icon style={{ fontSize: '4rem' }} icon='bi:github' />
        </a>
      </nav>
    </header>
  )
}

