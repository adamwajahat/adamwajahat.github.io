import React, { useState, useEffect } from 'react';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';
import topBar from '../assets/imgs/top_bar_notes.png';
import bottomBar from '../assets/imgs/bottom_bar_notes.png';
import '../styles/EmptyNote.css';

function EmptyNote({ noteImages, links }) {
  const [imagesLoaded, setImagesLoaded] = useState(true);
  const [videoStates, setVideoStates] = useState({});
  const shouldShowVideoDiv = links.some(linkObj => linkObj.title.toLowerCase() === 'video');

  useEffect(() => {
    const preloadAssets = async () => {
      const preloadPromises = [];


      for (let i = 6; i < noteImages.length; i++) {
        preloadPromises.push(loadImage(noteImages[i]));
      }


      links.forEach(linkObj => {
        if (linkObj.title.toLowerCase() === 'video') {
          preloadPromises.push(preloadVideo(linkObj.link));
        }
      });

      try {
        await Promise.all(preloadPromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading assets:', error);
      }
    };

    const loadImage = (imageSrc) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    const preloadVideo = (videoSrc) => {
      return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.src = videoSrc;
        video.preload = 'auto';
        video.onloadeddata = resolve;
        video.onerror = reject;
      });
    };

    preloadAssets();
  }, [noteImages, links]);

  const handleVideoDivClick = (index) => {
    setVideoStates(prevState => ({
      ...prevState,
      [index]: true,
    }));
  };

  if (!imagesLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="workDevice">
      <DeviceFrameset device="iPhone X">
        <div className="workContainer">
          <img alt="topBar" className='topBar' src={topBar}></img>
          <div className='scrollableNote'>
            {noteImages.map((imageSrc, index) => (
              <img
                key={index}
                src={imageSrc}
                alt={`Note ${index + 1}`}
                className={`noteImg noteImg-${index + 1}`}
              />
            ))}
            {shouldShowVideoDiv && (
              links.map((linkObj, index) => {
                if (linkObj.title.toLowerCase() === 'video') {
                  return (
                    <div
                      key={index}
                      className={`videoDiv videoDiv-${index}`}
                      onClick={() => handleVideoDivClick(index)}
                    >
                      {videoStates[index] && <video
                        className='videoNote'
                        playsInline
                        src={linkObj.link}
                        type="video/mp4"
                        controls
                        autoPlay={!!videoStates[index]}
                      />}
                      {!videoStates[index] && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '.5%',
                            left: '6.5%',
                            width: '87%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            zIndex: '1'
                          }}
                        />
                      )}
                    </div>
                  );
                }
                return null;
              })
            )}
            {links.map((linkObj, index) => {
              if (linkObj.title.toLowerCase() !== 'video') {
                return (
                  <a key={index} href={linkObj.link} className={`projectLink projectLink-${index + 1}`}>
                    {linkObj.title.split('\n').map((line, lineIndex) => (
                      <React.Fragment key={lineIndex}>
                        {line}
                        {lineIndex !== linkObj.title.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </a>
                );
              }
              return null;
            })}
          </div>
          <img alt="bottomBar" className='bottomBar' src={bottomBar}></img>
        </div>
      </DeviceFrameset>
    </div>
  );
}

export default EmptyNote;
