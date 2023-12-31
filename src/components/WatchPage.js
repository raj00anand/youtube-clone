import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const VideoId = searchParams.get("v");
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
  return (
    <div className='w-full'>
    <div className='p-2 m-2 flex w-full'>
    <div>
      <iframe width="1000" height="500" src={"https://www.youtube.com/embed/"+VideoId+"?si=BGuWICT4TJe7J0SL"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className='w-full'>
        <LiveChat/>
      </div>
    </div>
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage
