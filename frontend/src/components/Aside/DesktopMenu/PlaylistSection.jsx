import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

// Compontents
import FavoritePlayList from './FavoritePlayList';
import SavedPlayLists from './SavedPlayLists';
import FollowingPlayList from './FollowingPlayList';
import AddPlayListButton from './AddPlayListButton';

function PlaylistSection() {
  const [savedPlaylistIsOpen, setSavedPlaylistIsOpen] = useState(false);
  const [followingPlaylistIsOpen, setFollowingPlaylistIsOpen] = useState(false);

  return (
    <PlayListSectionWrapper>
      <FavoritePlayList />

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
        className='followingPlaylist-btn'
        color='primary'
        endIcon={<KeyboardArrowDownIcon />}
        onClick={() => setFollowingPlaylistIsOpen(!followingPlaylistIsOpen)}
      >
        Following
      </Button>

      {followingPlaylistIsOpen && <FollowingPlayList />}

      <AddPlayListButton />
    </PlayListSectionWrapper>
  );
}

const PlayListSectionWrapper = styled.div`
  top: 0;
  left: 0;
  height: 1000px;
  width: auto;
  margin-left: 1rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .savedPlaylist-btn,
  .followingPlaylist-btn {
    color: #c4c4c4;
    padding: 0;
  }
`;

export default PlaylistSection;
