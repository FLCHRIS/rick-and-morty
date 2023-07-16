import React from 'react'
import { BsFillCircleFill } from 'react-icons/bs'
import PropTypes from 'prop-types'

export const Card = ({ img, name, location, specie, state }) => {
  return (
    <div className='w-full max-w-[21rem] mx-auto overflow-hidden rounded-md shadow-md bg-backgroundTopLight dark:bg-backgroundTopDark'>
      <img src={img} alt={name} className='w-full h-[18rem] object-cover hover:scale-105 transition-transform' />
      <div className='px-[2rem] py-[2rem]'>
        <h2 className='break-words max-w-[370px] font-raleway text-lg font-[600] flex gap-[.5rem] justify-between items-start text-textLight dark:text-textDark'>
          {name}
          <span className='flex items-center gap-2 text-base'>
            <BsFillCircleFill aria-hidden='true' className={state === 'Dead' ? 'w-[.5rem] h-[.5rem] text-dead' : state === 'Alive' ? 'w-[.5rem] h-[.5rem] text-alive' : 'w-[.5rem] h-[.5rem]'} />
            {state}
          </span>
        </h2>
        <p className='font-raleway mt-[1.2rem] text-textLight dark:text-textDark'>
          <b className='font-[500]'>Location: </b>
          {location}
        </p>
        <p className='font-raleway mt-[1.2rem] text-textLight dark:text-textDark'>
          <b className='font-[500]'>Species: </b>
          {specie}
        </p>
      </div>
    </div>
  )
}

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  specie: PropTypes.string,
  state: PropTypes.string
}
