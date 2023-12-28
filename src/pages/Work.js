import React from 'react'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import somewhereinGaza from '../assets/imgs/somewhereinGaza_notes.png'
import topBar from '../assets/imgs/top_bar_notes.png'
import bottomBar from '../assets/imgs/bottom_bar_notes.png'
import '../styles/Work.css'

function Work() {
  return (
    <div className="workDevice">
      <DeviceFrameset device="iPhone X">
        <div class="workContainer">
            <img alt="topBar" className='topBar' src={topBar}></img>
            <div className='scrollableNote'>
              <img src={somewhereinGaza} alt="Loading?" className="somewhereinGazaNote"></img> 
              <a href='https://somewhereingaza.github.io/' className='projectLink'>https://somewhereingaza.github.io</a>
            </div>
            <img alt="bottomBar" className='bottomBar' src={bottomBar}></img>
          </div>
      </DeviceFrameset>
    </div>
  )
}

export default Work