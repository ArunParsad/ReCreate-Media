import React from 'react'
import { categories } from '../utils/constant'
import Tag from './Tag'
const Categories = () => {
  return (
    <>
      <div className='flex flex-row justify-center items-center w-full md:max-w-[90vw] space-x-3 overflow-x-auto  mx-auto scrollbar-none'>
        {categories.map((categorie) => {
          const { id } = categorie
          return <Tag {...categorie} key={id} />
        })}
      </div>
    </>
  )
}

export default Categories
