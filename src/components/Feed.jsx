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
      <section className='max-w-[95vw] md:max-w-[90vw] justify-left space-x-4  h-full flex flex-row md:mx-20 mx-5 flex-wrap mt-5'>
        {videos.map((video, index) => {
          return <VideoCard video={video} key={index} />
        })}
      </section>
    </>
  )
}

export default Feed
