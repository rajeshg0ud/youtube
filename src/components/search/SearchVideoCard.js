import React from 'react';
import user from '../../Images/utube.png';
import { Link } from 'react-router-dom';

function SearchVideoCard({info}) {

    const {snippet, id}=info;
    const { thumbnails, title, channelTitle, description}= snippet;

  return (
    <div className=' py-6 mr-3 max-w-80 sm:max-w-72 cursor-pointer hover:border-radius-none   w-[150%] sm:w-[1000px] ' >
        <Link to={id.videoId ? ('/watch?v='+ id.videoId ) : '?q=telugusongs'} className='flex m-6 flex-col sm:flex-row '>
        <img
            src={thumbnails.high.url}
            className=' min-h-40 h-44 w-80 md:h-[162px] md:w-80 md:max-w-72 rounded-xl object-cover transition-all duration-300 ease-in-out hover:rounded-none '
          />
          <div className='ml-4 '>
            
          <h1 className=' font-semibold text-lg text-gray-700'>{title}</h1>
          <div className='flex items-center'>
            <img src={user} className=' h-8 '/>
            <p className=' text-sm ml-1'>{channelTitle}</p>
          </div>
          <p className=' max-w-2xl text-xs'> {description}</p>
          </div></Link>
          
    </div>
  )
}

export default SearchVideoCard