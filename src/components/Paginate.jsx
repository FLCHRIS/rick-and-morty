import React from 'react'
import ReactPaginate from 'react-paginate'
import PropTypes from 'prop-types'

export const Paginate = ({ page, setPage }) => {
  const handlePageClick = (event) => {
    const { selected } = event
    console.log(selected + 1)
    setPage(selected + 1)
  }
  return (
    <ReactPaginate
      breakLabel='...'
      nextLabel='>'
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={page}
      previousLabel='<'
      renderOnZeroPageCount={null}
      className='max-w-[375px] mx-auto grid grid-flow-col text-center font-raleway font-[500] text-textLight dark:text-textDark'
    />
  )
}

Paginate.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func
}
