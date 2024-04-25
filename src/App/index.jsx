import React from 'react'
import { Tweet } from 'react-tweet'
import '../index.css'

function TweetPages() {

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-white m-10 underline">Tweets Destacados</h1>
      <div className="flex justify-center space-x-4">
        {/* cambiar url*/}
        <Tweet id='1743353392087646591'/>
        <Tweet id='1737169802232222079'/>
        <Tweet id='1648885542518419457'/>
      </div>
    </>


  )
}

export {TweetPages}
