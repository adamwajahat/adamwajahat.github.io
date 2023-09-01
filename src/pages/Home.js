import React from 'react'
import videoLogo from '../assets/imgs/adam_wajahat_logo.mov'
import "../styles/Home.css"

function Home() {
  return (
    <div className="homeLogo">
      <video src={videoLogo} autoPlay muted></video>
    </div>
  )
}

export default Home