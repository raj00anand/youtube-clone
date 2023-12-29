import React from 'react'

const VideoCard = ({ info }) => {
 
  const {snippet, statistics 
  } = info;
  const { channelTitle
, thumbnails
,title 
} = snippet;
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img className='rounded-lg' src={thumbnails?.medium.url
} alt='thumbnails'/>
      <ul>
        <li className='font-bold py-1'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard;
