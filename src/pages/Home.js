import React from 'react';
import videoLogo from '../assets/imgs/adam_wajahat_logo.mov';
import "../styles/Home.css";

function Home() {
  return (
    <div className="homeLogo" dangerouslySetInnerHTML={{ __html: `
      <video
        loop
        muted
        autoplay
        playsinline
        src="${videoLogo}"
      />,
      ` }}>

   </div>
  )
}

export default Home