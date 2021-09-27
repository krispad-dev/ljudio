import React, { useContext, useEffect } from 'react';
import { UiContext } from '../../context/UiState';

import { playerControllerStateContext } from '../../context/YouTubePlayerContext';
import { PLAYER_ACTIONS } from '../../reducers/YouTubePlayerReducer';

import useGetSongs from '../../hooks/useGetSongs';
import SongCard from './SongCard';
import SkeletonLoader from '../Loaders/SkeletonLoader';
import styled from 'styled-components';
import AddMusicToPlayListList from '../AddMusicToPlaylistMenu/AddMusicToPlayListList';
import MyLoader from '../Loaders/SongListLoader';
import SongListLoader from '../Loaders/SongListLoader';

function SongsList() {
  const { state } = useContext(UiContext);
  const [playerState, dispatch] = useContext(playerControllerStateContext);

  const { data, isLoading } = useGetSongs(state.headerSearchString);

  const musicArrayToFilter = data && data.searchResults && data.searchResults.content && data.searchResults.content;

  const filteredOutSongsArray =
    musicArrayToFilter &&
    [...musicArrayToFilter].map((song) => {
      return song.videoId;
    });

  useEffect(() => {
    dispatch({ type: PLAYER_ACTIONS.SET_PENDING_CUE, payload: filteredOutSongsArray });
  }, [data]);

  return (
    <>
      {/* {isLoading && <SkeletonLoader />} */}
      {isLoading && <SongListLoader />}
      {state.saveSongToPlaylistSelectorSectionIsOpen && <AddMusicToPlayListList />}
      <SongListWrapper>
        {data &&
          data.searchResults &&
          data.searchResults.content &&
          data.searchResults.content.map((item, index) => {
            return <SongCard index={index} key={item.videoId} {...item} />;
          })}
      </SongListWrapper>
    </>
  );
}

export default SongsList;

const SongListWrapper = styled.div`
  height: 40vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  box-shadow: 25px 25px 35px rgba(104, 104, 104, 0.05);
`;
