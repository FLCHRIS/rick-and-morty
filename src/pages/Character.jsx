import React, { useState, useEffect } from 'react'
import { Card } from '../components/Card'
import { Search } from '../components/Search'
import { Paginate } from '../components/Paginate'

export const Character = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState([])

  const API = `https://rickandmortyapi.com/api/character/?page=${page}`

  useEffect(() => {
    (
      async function () {
        const response = await fetch(API)
        if (response.ok) {
          const values = await response.json()
          setData(values.results)
          setFilter(values.results)
        }
      }
    )()
  }, [API])

  const handleChange = (e) => {
    const input = e.target.value

    const updatedCharacters = [...data]

    const values = updatedCharacters.filter((character) => {
      return character.name.toLowerCase().includes(input.toLowerCase())
    })

    setFilter(values)
  }

  return (
    <div>
      <div className='grid place-content-center'>
        <Search placeholder='Find character...' handleChange={handleChange} />
      </div>
      <div className='mt-[2rem] grid gap-[2rem] sm:grid-cols-2 lg:grid-cols-3'>
        {
          filter.map((character, index) => (
            <Card key={index} img={character.image} location={character.location.name} name={character.name} specie={character.species} state={character.status} />
          ))
        }
      </div>
      <div className='mt-[1.5rem]'>
        <Paginate page={42} setPage={setPage} />
      </div>
    </div>
  )
}
