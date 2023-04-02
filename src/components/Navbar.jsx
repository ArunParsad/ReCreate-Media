import React from 'react'
import { BiSearch } from 'react-icons/bi'
const Navbar = () => {
  return (
    <>
      <nav className='w-full h-20 flex flex-row px-2 md:px-20 justify-between items-center text-white'>
        <div className='flex flex-row space-x-2 items-center justify-center'>
          <img
            src='https://ik.imagekit.io/uuxn3oqcr/logo95_eXjGSj7nA.png?updatedAt=1659874817592'
            alt='ReCreate'
            className='w-[3rem]'
          />
          <span className='font-[600] leading-tight md:leading-relaxed text-sm md:text-xl'>
            ReCreate Media
          </span>
        </div>
        <form className='flex flex-row space-x-2'>
          <input
            type='text'
            placeholder='Search'
            className='hover:outline-none bg-[#232322] focus:outline-none py-[0.5rem] pl-5 rounded-full w-[8rem] md:w-[20rem] border border-[#3A3A3A]'
          ></input>
          <button
            type='submit'
            className='bg-[#232322] py-[0.5rem] w-[2.7rem] rounded-full flex justify-center items-center border border-[#3A3A3A]'
          >
            <BiSearch />
          </button>
        </form>
      </nav>
    </>
  )
}

export default Navbar
