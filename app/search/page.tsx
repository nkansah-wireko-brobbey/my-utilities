import React from 'react'
import { SearchComp } from './components/searchComp'

const page = () => {
  return (
    <div className='w-full'>
      <h1 className='text-center text-6xl font-bold'>
        Command Search Utility
      </h1>
        <SearchComp />
    </div>
  )
}

export default page