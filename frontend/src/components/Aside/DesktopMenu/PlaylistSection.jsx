import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

// Compontents
import FavoritePlayList from './FavoritePlayList';
import SavedPlayLists from './SavedPlayLists';
import FollowedPlaylists from './FollowedPlayLists';
import AddPlayListButton from './AddPlayListButton';

function PlaylistSection() {
  const [savedPlaylistIsOpen, setSavedPlaylistIsOpen] = useState(false);
  const [followedPlaylistsIsOpen, setFollowedPlaylistsIsOpen] = useState(false);

  return (
    <PlayListSectionWrapper>
      {/*       <FavoritePlayList /> */}

      <Button
        className='savedPlaylist-btn'
        color='primary'
        endIcon={<KeyboardArrowDownIcon />}
        onClick={() => setSavedPlaylistIsOpen(!savedPlaylistIsOpen)}
      >
        Saved Playlist
      </Button>
      {savedPlaylistIsOpen && <SavedPlayLists />}

      <Button
        className='followedPlaylists-btn'
        color='primary'
        endIcon={<KeyboardArrowDownIcon />}
        onClick={() => setFollowedPlaylistsIsOpen(!followedPlaylistsIsOpen)}
      >
        Following
      </Button>

      {followedPlaylistsIsOpen && <FollowedPlaylists />}

      <AddPlayListButton />
    </PlayListSectionWrapper>
  );
}

const PlayListSectionWrapper = styled.div`
  height: auto;
  width: auto;
  margin-left: 1rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .savedPlaylist-btn,
  .followedPlaylists-btn {
    color: #c4c4c4;
    padding: 0;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
    font-size: 0.9rem;
    font-weight: lighter;
  }
`;

export default PlaylistSection;
