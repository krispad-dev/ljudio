import React from 'react';

// Compontents
import FavoritePlayList from './FavoritePlayList';
import SavedPlayLists from './SavedPlayLists';
import FollowingPlayList from './FollowingPlayList';

function UserPlayListsSection() {
  return (
    <div>
      <h1>MY PLAYLIST</h1>
      <FavoritePlayList />
      <SavedPlayLists />
      <FollowingPlayList />
    </div>
  );
}

export default UserPlayListsSection;
