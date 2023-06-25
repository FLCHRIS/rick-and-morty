import React, { useState, useEffect } from 'react'
import { Search } from '../components/Search'
import { Paginate } from '../components/Paginate'
import { Card } from '../components/Card'

export const Location = () => {
  const [description, setDescription] = useState({})
  const [data, setData] = useState([])
  const [location, setLocation] = useState(1)
  const [filter, setFilter] = useState([])

  const API = `https://rickandmortyapi.com/api/location/${location}`

  useEffect(() => {
    (
      async () => {
        const request = await fetch(API)
        if (request.ok) {
          const values = await request.json()
          const { name, type } = values
          setDescription({ name, type })
          const getCharacter = await Promise.all(
            values.residents.map(async x => {
              const res = await fetch(x)
              return await res.json()
            })
          )
          setData(getCharacter)
          setFilter(getCharacter)
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
      <div>
        <div className='grid place-content-center'>
          <Search placeholder='Find Character...' handleChange={handleChange} />
        </div>
        <div className='my-[2rem]'>
          <h2 className='font-raleway text-textLight text-[1.3rem] text-center mb-[1rem] dark:text-textDark'>
            <b>Location: </b>
            {description.name && description.name}
          </h2>
          <p className='font-raleway text-textLight dark:text-textDark'>
            <b>Type: </b>
            {description.type && description.type}
          </p>
        </div>
      </div>
      <div className='mt-[2rem] grid gap-[2rem] sm:grid-cols-2 lg:grid-cols-3'>
        {
          filter.length === 0
            ? (
              <h3 className='text-center font-raleway text-[1.3rem] font-[600] dark:text-textDark'>No resident</h3>
              )
            : (
                filter.map((character, index) => (
                  <Card key={index} img={character.image} location={character.location.name} name={character.name} specie={character.species} state={character.status} />
                ))
              )
        }
      </div>
      <div className='mt-[1.5rem]'>
        <Paginate page={126} setPage={setLocation} />
      </div>
    </div>
  )
}
