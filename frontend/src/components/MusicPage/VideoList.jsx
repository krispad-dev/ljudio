import React, { useContext, useEffect } from 'react';
import useGetMusicVideos from '../../hooks/useGetMusicVideos';
import VideoCard from './VideoCard';
import styled from 'styled-components';

import { UiContext } from '../../context/UiState';
import { UI_STATE_ACTIONS } from '../../reducers/UiReducer';

import { playerControllerStateContext } from '../../context/YouTubePlayerContext';
import { PLAYER_ACTIONS } from '../../reducers/YouTubePlayerReducer';
import GridLoader from '../Loaders/GridLoader';

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
  const { state, dispatch } = useContext(UiContext);
  const [playerState, dispatchPlayerController] = useContext(playerControllerStateContext);

  //Search for videos with searchBar
  const { data, isLoading } = useGetMusicVideos(state.headerSearchString);

  //Videos from arr from hook
  const videos = data && data.success && data.searchResults && data.searchResults.content;

  //array of videoId's
  const filteredOutVideosArray =
    videos &&
    videos.map((video) => {
      return video.videoId;
    });

  //Set default searchterm on pageload
  useEffect(() => {
    dispatch({
      type: UI_STATE_ACTIONS.SET_HEADER_SEARCH_STRING,
      payload: { headerSearchString: 'rem' },
    });
  }, []);

  useEffect(() => {
    dispatchPlayerController({ type: PLAYER_ACTIONS.SET_PENDING_CUE, payload: filteredOutVideosArray });
  }, [data]);

  return (
    <VideoListWrapper>
      {isLoading && <GridLoader />}
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
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }

  h1 {
    margin-bottom: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    color: #eee;
  }
`;
