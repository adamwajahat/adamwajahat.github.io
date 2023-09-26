import React from 'react'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import workNote from '../assets/imgs/long_note.png'
import '../styles/Work.css'

function Work() {
  return (
    <div className="workDevice">
      <DeviceFrameset device="iPhone X">
        <div>
          <a className="workAllLink" href="/work/all">
            Test!
          </a>
          <img src={workNote} alt="Loading?" className="note"></img>  
        </div>
      </DeviceFrameset>
    </div>
  )
}

export default Work