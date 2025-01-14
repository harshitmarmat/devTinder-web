import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { feedFetch } from '../utils/feedSlice'
import UserCard from './common/UserCard'

const Feed = () => {
  const feed = useSelector(state=>state.feed)
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(feedFetch())
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
