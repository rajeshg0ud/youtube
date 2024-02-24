import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard=({info})=> {
    
    const {snippet, statistics}=info;
    const { thumbnails, title, channelTitle}= snippet;
    const {viewCount}=statistics;


    function formatViewsCount(views) {
        if (views < 1000) {
          return views.toString(); 
        } else if (views < 1000000) {
          return (views / 1000).toFixed(0) + 'K';
        } else {
          return (views / 1000000).toFixed(1) + 'M';
        }
      }
    

      return (
        <Link to={'/watch?v='+ info.id}>
        <div className=' py-6 mr-3 max-w-full sm:max-w-72 cursor-pointer hover:border-radius-none   w-[150%] sm:w-[1000px] '>
          <img
            src={thumbnails.high.url}
            className=' min-h-40 h-52 w-96  md:h-[162px] md:w-80 md:max-w-72 rounded-xl object-cover transition-all duration-300 ease-in-out hover:rounded-none '
          />
          <h1 className=' text-sm font-semibold line-clamp-2 max-w-80 sm:max-w-full'>{title}</h1>
          <p className='text-sm text-gray-600'>{channelTitle}</p>
          <p className='text-sm text-gray-600'>{formatViewsCount(viewCount)} views</p>
        </div>
        </Link>
      );
      

}

export default VideoCard;