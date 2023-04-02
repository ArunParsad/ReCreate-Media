import { Link } from 'react-router-dom'

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constant'

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <div className='rounded-lg shadow-sm overflow-hidden w-80 h-full'>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <img
        src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        className='w-80 h-48 object-cover'
      />
    </Link>
    <div className='px-4 py-2'>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <p className='text-white font-bold text-lg mb-2 hover:text-blue-500 transition-all duration-300'>
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </p>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
        className='flex items-center text-gray-500 text-sm hover:text-blue-500 transition-all duration-300'
      >
        <p className='mr-1'>{snippet?.channelTitle || demoChannelTitle}</p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4 text-gray-500'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M2.5 10a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm11.228-2.646a.5.5 0 00-.706-.706l-3.5 3.5a.5.5 0 00-.148.353V13.5a.5.5 0 001 0v-2.793l3.354-3.354z'
            clipRule='evenodd'
          />
        </svg>
      </Link>
    </div>
  </div>
)

export default VideoCard
