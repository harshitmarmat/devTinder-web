import axios from 'axios'
import React, { useEffect } from 'react'
import { BASEURL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './common/UserCard'

const Feed = () => {
  const feed = useSelector(state=>state.feed)
  const dispatch = useDispatch();


  const getFeed = async() => {
    try {
      const res = await axios.get(BASEURL+"/user/feed",{withCredentials : true}) 
      dispatch(addFeed(res?.data))    
    }
    catch(err){

    }
  }

  useEffect(()=> {
    getFeed()
  },[])
  if(!feed) return;

  if(feed.length <=0) return <h1 className="text-center my-10">No new user found!</h1>

  return (
    <div className='flex justify-center'>
      {feed && <UserCard user={feed[0]} />}
    </div>
  )
}

export default Feed
