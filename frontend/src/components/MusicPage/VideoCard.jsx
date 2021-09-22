import React from 'react';

import styled from 'styled-components';

import MusicPlayBtn from '../MusicPlayBtn';

function VideoCard({ videoId, name, author, thumbnails, index, bgColor }) {
  return (
    <VideoCardWrapper style={{ backgroundColor: bgColor }}>
      <div style={{ backgroundImage: `url('${thumbnails.url}')` }} className='bg-image'>
        <MusicPlayBtn className='play-btn' index={index} videoId={videoId} />
      </div>
      <div>
        <h3>{author}</h3>
        <h2>{name.substring(0, 20)}</h2>
      </div>
    </VideoCardWrapper>
  );
}

export default VideoCard;

const VideoCardWrapper = styled.div`
  position: relative;

  img {
    max-width: 200px;
  }

  h3,
  h2 {
    font-weight: bold;
    color: #fff;
  }
  .bg-image {
    position: relative;
    width: 100%;
    min-height: 50%;
    background-size: cover;
    background-position: center center;
  }
  .play-btn {
    font-size: 5rem;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
