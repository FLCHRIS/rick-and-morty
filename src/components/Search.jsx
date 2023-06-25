import React from 'react'
import PropTypes from 'prop-types'

import { BiSearchAlt2 } from 'react-icons/bi'

export const Search = ({ placeholder, handleChange }) => {
  return (
    <div className='w-max grid grid-flow-col items-center gap-[.5rem]'>
      <BiSearchAlt2 className='text-textLight dark:text-textDark' />
      <input onChange={handleChange} type='text' placeholder={placeholder} className='outline-none font-raleway placeholder-placeholder border-b-[.1rem] border-textLight text-textLight dark:text-textDark dark:border-textDark bg-transparent' />
    </div>
  )
}

Search.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func
}
