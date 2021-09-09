import React from 'react';
import styled from 'styled-components';

// Compontents
import FavoritePlayList from './FavoritePlayList';
import SavedPlayLists from './SavedPlayLists';
import FollowingPlayList from './FollowingPlayList';
import AddPlayListButton from './AddPlayListButton';

function PlaylistSection() {
  return (
    <PlayListSectionWrapper>
      <FavoritePlayList />
      <details>
        <summary>Saved Playlists</summary>
        <SavedPlayLists />
      </details>
      <details>
        <summary>Following</summary>
        <FollowingPlayList />
      </details>
      <AddPlayListButton />
    </PlayListSectionWrapper>
  );
}

const PlayListSectionWrapper = styled.div`
  top: 0;
  left: 0;
  height: 40rem;
  width: 15rem;
  margin: 1rem 1rem 1rem 1rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
`;

export default PlaylistSection;
