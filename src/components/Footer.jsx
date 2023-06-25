import React from 'react'
import { FaHeart } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='bg-backgroundTopLight w-full py-[1.5rem] dark:bg-backgroundTopDark'>
      <p className='font-raleway flex w-max mx-auto items-center text-textLight gap-1 dark:text-textDark'>
        Build with
        <FaHeart />
        by <span className='font-[600]'>Christian</span>
      </p>
    </footer>
  )
}
