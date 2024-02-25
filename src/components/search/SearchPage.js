import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { key } from '../../utils/config';
import ButtonList from '../ButtonList'
import SearchVideoCard from './SearchVideoCard';
import { useDispatch } from 'react-redux';
import { openMenu } from '../../store/HamburgerSlice';

function SearchPage() {

  const dispatch = useDispatch();

  const [params]= useSearchParams();

  const [searchData, setSearchData]= useState([]);

  const getSearchData= async()=>{
    const data=await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&${params}&maxResults=50&key=`+'AIzaSyDZ4DNSb8rLS3pyouYieoMUFr5PlhP0m08')
    const jsonData= await data.json();
    setSearchData(jsonData.items)
  }

  useEffect(()=>{
    getSearchData();

    dispatch(openMenu());
  },[params])

  return (
    <div>
      
      <ButtonList />
      {
        searchData?.map((video, index)=>(
          <SearchVideoCard info={video} key={video.id.videoId? video.id.videoId : index } />

        ))
      }
    </div>
  )
}

export default SearchPage;