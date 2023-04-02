import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import { useGlobalContext } from '../context/Context'
import Feed from '../components/Feed'
const Root = () => {
  const { videos } = useGlobalContext()

  return (
    <>
      <Navbar />
      <Categories />
      <Feed />
    </>
  )
}

export default Root
