import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export const NavBar = ({ menu }) => {
  const links = [
    {
      to: '/',
      name: 'Character'
    },
    {
      to: '/location',
      name: 'Location'
    },
    {
      to: '/episode',
      name: 'Episode'
    }
  ]

  return (
    <nav className={menu === 'hidden' ? 'fixed bg-backgroundTopLight w-full left-0 top-[4.9rem] py-[.7rem] hidden-menu dark:bg-backgroundTopDark sm:static' : 'fixed bg-backgroundTopLight w-full left-0 top-[4.9rem] py-[.7rem] hidden-menu show-menu dark:bg-backgroundTopDark sm:static'}>
      <ul className='text-center sm:grid sm:grid-flow-col sm:gap-[1rem]'>
        {links.map((link, index) => (
          <li key={index} className='py-[.7rem] sm:py-0 font-raleway text-textLight dark:text-textDark'>
            <NavLink to={link.to} className={({ isActive }) => isActive ? 'font-[500]' : 'font-[400]'}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

NavBar.propTypes = {
  menu: PropTypes.string
}
