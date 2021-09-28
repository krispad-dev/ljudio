import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import AddMusicToPlaylistItem from './AddMusicToPlaylistItem';
import useGetSavedUserPlaylists from '../../hooks/useGetSavedUserPlaylists';
import useOutsideClick from '../../hooks/uiHooks/useOutsideClick';
import { UiContext } from '../../context/UiState';
import { UI_STATE_ACTIONS } from '../../reducers/UiReducer';
import CreatePlaylist from '../Aside/DesktopMenu/CreatePlaylist';
import { useLocation, useParams } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

import AddToCueBtn from '../AddToCueBtn';
import RemoveSongFromPlaylistBtn from '../RemoveSongFromPlaylistBtn';

import { isInUserPlaylist } from '../../helpers/helpers';
import RemoveFromCueBtn from '../RemoveFromCueBtn';

function AddMusicToPlayListList() {
  const { data: auth } = useAuth();
  const { pathname } = useLocation();
  const { id } = useParams();

  const { data } = useGetSavedUserPlaylists();
  const { state, dispatch } = useContext(UiContext);

  const ref = useRef();

  useOutsideClick(ref, () => {
    if (state.saveSongToPlaylistSelectorSectionIsOpen) {
      dispatch({
        type: UI_STATE_ACTIONS.CLOSE_SAVE_SONG_TO_PLAYLIST_SELECTOR_SECTION,
        payload: { saveSongToPlaylistSelectorSectionIsOpen: false },
      });
    }
  });

  return (
    <AddMusicToPlayListListWrapper style={pathname === `/artist/${id}` ? { bottom: '20rem' } : {}} ref={ref}>
      {auth && auth.loggedIn && pathname !== '/cue' && <AddToCueBtn videoId={state.songToSaveToUserPlaylist} />}

      {data && data.userPlaylists && auth.loggedIn && isInUserPlaylist(id, data.userPlaylists) && (
        <RemoveSongFromPlaylistBtn videoId={state.songToSaveToUserPlaylist} playlistId={id} />
      )}

      {auth && auth.loggedIn && pathname === '/cue' && <RemoveFromCueBtn />}
      <p className='add-to-playlist-text'>Choose Playlist...</p>
      <CreatePlaylist />

      {data &&
        data.userPlaylists &&
        data.userPlaylists.map((playlist, index) => <AddMusicToPlaylistItem key={index} {...playlist} />)}
    </AddMusicToPlayListListWrapper>
  );
}

export default AddMusicToPlayListList;

const AddMusicToPlayListListWrapper = styled.ul`
  animation: grow ease-in-out 0.1s;

  .add-to-playlist-text {
    color: #555;
    margin-top: 1rem;
    font-weight: 900;
    margin-left: 1rem;
  }

  @keyframes grow {
    from {
      transform: scale(0%);
    }

    to {
      transform: scale(100%);
    }
  }

  width: auto;
  height: auto;
  background-color: rgba(0, 0, 0, 0.9);
  right: 7rem;
  border-radius: 5px;
  z-index: 2000;
  height: 15rem;
  overflow-y: scroll;
  position: absolute;
  padding-left: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
