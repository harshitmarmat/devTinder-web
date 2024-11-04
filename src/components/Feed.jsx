import axios from 'axios'
import React, { useEffect } from 'react'
import { BASEURL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './UserCard'

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

  return (
    <div>
      {feed && <UserCard user={feed[0]} />}
    </div>
  )
}

export default Feed
