import React from 'react'
import Video from './components/Video'
import './App.css'

function App() {

  let obj = {
    title : "React JS tutorial",
    views : "999K",
    time : "1 year ago",
    channel : "Coder Dost"
  }

  return (
    <div className='App'>
      <div>Videos</div>
      <Video {...obj} />
      <Video
        title = "Node JS Tutorial"
        views = "100K"
        time = "1 month ago"
      />
      <Video
        title = "Mongo DB tutorial"
        views = "1M"
        time = "1 month ago"
        channel = "Coder Dost"
      />
    </div>
    
  )
}

export default App