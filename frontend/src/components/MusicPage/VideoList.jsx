import React, { useContext, useEffect } from 'react';
import useGetMusicVideos from '../../hooks/useGetMusicVideos';
import VideoCard from './VideoCard';
import styled from 'styled-components';

import UiContext from '../../context/UiState';
import { UI_STATE_ACTIONS } from '../../reducers/UiReducer';

import { playerControllerStateContext } from '../../context/YouTubePlayerContext';
import { PLAYER_ACTIONS } from '../../reducers/YouTubePlayerReducer';

const colors = [
  '#ff9ff3',
  '#feca57',
  '#ff6b6b',
  '#48dbfb',
  '#1dd1a1',
  '#f368e0',
  '#ff9f43',
  '#ff9ff3',
  '#feca57',
  '#ff6b6b',
  '#48dbfb',
  '#1dd1a1',
  '#f368e0',
  '#ff9f43',
  '#ff9ff3',
  '#feca57',
  '#ff6b6b',
  '#48dbfb',
  '#1dd1a1',
  '#f368e0',
  '#ff9f43',
];

function VideoList() {
  const [playerState, dispatch] = useContext(playerControllerStateContext);

  const data = useGetMusicVideos('rem');

  const videos = data && data.data && data.data.success && data.data.searchResults && data.data.searchResults.content;

  const filteredOutVideosArray =
    videos &&
    videos.map((video) => {
      return video.videoId;
    });

  useEffect(() => {
    dispatch({ type: PLAYER_ACTIONS.SET_PENDING_CUE, payload: filteredOutVideosArray });
  }, [data.data]);

  return (
    <VideoListWrapper>
      <h1>Videos</h1>

      <div className='grid-container'>
        {videos &&
          videos.map((video, index) => (
            <VideoCard bgColor={colors[index]} index={index} key={video.videoId} {...video} />
          ))}
      </div>
    </VideoListWrapper>
  );
}

export default VideoList;

const VideoListWrapper = styled.div`
  .grid-container {
    display: grid;
    gap: 1rem;
    grid-auto-rows: 12rem;
    grid-template-columns: 1fr;
  }
  @media (min-width: 650px) {
    .grid-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1000px) {
    .grid-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media (min-width: 1200px) {
    .grid-container {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  h1 {
    margin-bottom: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    color: #eee;
  }
`;
