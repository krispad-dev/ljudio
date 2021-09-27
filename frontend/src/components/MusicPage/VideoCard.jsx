import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { shortenLongStrings } from '../../helpers/helpers';

import MusicPlayBtn from '../MusicPlayBtn';

function VideoCard({ videoId, name, author, thumbnails, index, bgColor }) {
  return (
    <VideoCardWrapper /* style={{ backgroundColor: bgColor }} */>
      <div style={{ backgroundImage: `url('${thumbnails.url}')` }} className='bg-image'>
        <MusicPlayBtn className='play-btn' index={index} videoId={videoId} />

        <Link to={`/songs/${videoId}`}>
          <div className='video-info'>
            <h3>{author}</h3>
            <h2>{shortenLongStrings(name, 25)}</h2>
          </div>
        </Link>
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

  .bg-image {
    position: relative;
    width: 100%;
    min-height: 100%;
    background-size: cover;
    background-position: center center;
  }
  .play-btn {
    font-size: 7rem;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .video-info {
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;

    h3 {
      font-weight: bold;
      color: #fff;
    }
    h2 {
      color: #fff;
      font-weight: 300;
    }
  }
  .video-info:hover {
    h3,
    h2 {
      color: #1dd1a1;
    }
  }
`;
