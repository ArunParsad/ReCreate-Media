import React from 'react'
import { useGlobalContext } from '../context/Context'

const Tag = ({ name }) => {
  const { dispatch } = useGlobalContext()
  return (
    <button
      className='bg-[#3A3A3A] py-2 px-4 text-center rounded-full text-[#F1F0F0]'
      onClick={() => dispatch({ type: 'CHANGE_CATEGORIE', payload: name })}
    >
      {name}
    </button>
  )
}

export default Tag
