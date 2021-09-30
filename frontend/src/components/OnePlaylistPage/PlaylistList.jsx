import React, { useEffect, useContext } from 'react';
import { UiContext } from '../../context/UiState';

import { playerControllerStateContext } from '../../context/YouTubePlayerContext';
import { PLAYER_ACTIONS } from '../../reducers/YouTubePlayerReducer';
import { UI_STATE_ACTIONS } from '../../reducers/UiReducer';

import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import SongCardItem from './SongCardItem';
import PlaylistTitleHeader from './PlaylistTitleHeader';
import useGetOneSavedUserPlaylist from '../../hooks/useGetOneSavedUserPlaylist';
import AddMusicToPlayListList from '../AddMusicToPlaylistMenu/AddMusicToPlayListList';
import SongListLoader from '../Loaders/SongListLoader';

function PlaylistList() {
  const [playerState, dispatch] = useContext(playerControllerStateContext);

  let { id } = useParams();
  const { data, isSuccess, isLoading } = useGetOneSavedUserPlaylist(id);
  const { state, dispatch: uiContextDispatch } = useContext(UiContext);

  const pendingCue = data && data.playlist && data.playlist.songs && data.playlist.songs;

  useEffect(() => {
    dispatch({ type: PLAYER_ACTIONS.SET_PENDING_CUE, payload: pendingCue });
  }, [data]);

  useEffect(() => {
    uiContextDispatch({ type: UI_STATE_ACTIONS.SET_CURRENT_PLAYLIST_ID, payload: { currentPlaylistId: id } });
  }, [id]);

  return (
    <>
      <PlaylistTitleHeader isSuccess={isSuccess} playlist={data && data.success && data.playlist} />
      {state.saveSongToPlaylistSelectorSectionIsOpen && <AddMusicToPlayListList />}
      <PlayListCaPlaylistListWrapper>
        {data && data.success && data.playlist.songs && !data.playlist.songs.length && (
          <h2 className='empty-cue'>No songs in this playlist...Add some!</h2>
        )}
        {isLoading && <SongListLoader />}
        {data &&
          data.success &&
          data.playlist.songs &&
          data.playlist.songs.length > 0 &&
          data.playlist.songs.map((song, i) => <SongCardItem index={i} key={i} song={song} />)}
        {data && !data.success && <h2>No songs here - add some :)</h2>}
      </PlayListCaPlaylistListWrapper>
    </>
  );
}

const PlayListCaPlaylistListWrapper = styled.div`
  width: auto;
  height: 50vh;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
  .empty-cue {
    padding: 1rem;
  }
`;

export default PlaylistList;
