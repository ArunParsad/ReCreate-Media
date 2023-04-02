import React from 'react'
import { categories } from '../utils/constant'
import Tag from './Tag'
const Categories = () => {
  return (
    <>
      <div className='md:mx-20 mx-10 space-x-2 space-y-2 md:space-y-0 overflow-x-auto'>
        {categories.map((categorie) => {
          const { id } = categorie
          return <Tag {...categorie} key={id} />
        })}
      </div>
    </>
  )
}

export default Categories
