import React from 'react'
import './feed.css'
import Post from './Post'
import TweetBox from './TweetBox'

const feed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* Tweet box */}
      <TweetBox/>

      {/* post */}
      <Post/>
    </div>
  )
}

export default feed
