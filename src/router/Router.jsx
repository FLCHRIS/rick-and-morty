import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import { Character } from '../pages/Character'
import { Episode } from '../pages/Episode'
import { Location } from '../pages/Location'
import { NotFound } from '../pages/NotFound'

export const Router = () => {
  return (
    <>
      <Header />
      <main className='bg-backgroundLight dark:bg-backgroundDark p-[1.5rem] md:px-[4rem] min-h-[80vh]'>
        <Routes>
          <Route path='/' element={<Character />} />
          <Route path='/episode' element={<Episode />} />
          <Route path='/location' element={<Location />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
