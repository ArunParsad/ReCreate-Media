import React from 'react'
import { useGlobalContext } from '../context/Context'
import VideoCard from '../components/VideoCard'
import Loader from './Loader'

const Feed = () => {
  const {
    state: { videos },
  } = useGlobalContext()
  if (!videos?.length)
    return (
      <>
        <section className='w-screen h-[60vh] flex flex-col justify-center items-center'>
          <Loader />
        </section>
      </>
    )
  return (
    <>
      <section className='grid grid-cols-1 max-w-full md:grid-cols-3 lg:grid-cols-4 mx-auto md:max-w-[95vw] mt-5 place-items-center'>
        {videos.map((video, index) => {
          return <VideoCard video={video} key={index} />
        })}
      </section>
    </>
  )
}

export default Feed
