import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from './NavBar'
import { BiMenu, BiSun } from 'react-icons/bi'

export const Header = () => {
  const [menu, setMenu] = useState('hidden')
  const [dark, setDark] = useState('')

  const handleTheme = () => {
    if (dark === '') {
      document.documentElement.classList.add('dark')
      setDark('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setDark('')
    }
  }

  return (
    <header className='sticky top-0 z-10 bg-backgroundTopLight grid grid-flow-col items-center justify-between p-[1.5rem] dark:bg-backgroundTopDark md:px-[4rem]'>
      <h1 className='text-[1.3rem] font-raleway font-[600] text-textLight dark:text-textDark'>
        <Link to='/'>Rick and Morty</Link>
      </h1>
      <div className='grid grid-flow-col gap-[1rem]'>
        <NavBar menu={menu} />
        <button onClick={handleTheme}>
          <BiSun className='text-textLight w-[1.5rem] h-[1.5rem] dark:text-textDark' />
        </button>
        <button className='sm:hidden' onClick={() => menu === 'hidden' ? setMenu('show') : setMenu('hidden')}>
          <BiMenu className='text-textLight w-[1.7rem] h-[1.7rem] dark:text-textDark' />
        </button>
      </div>
    </header>
  )
}
