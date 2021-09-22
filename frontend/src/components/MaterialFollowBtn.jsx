import React from 'react';
import { isInPlaylist } from '../helpers/helpers';
import Button from '@material-ui/core/Button';

import useFollowPlaylist from '../hooks/useFollowPlaylist';
import useUnfollowPlaylist from '../hooks/useUnfollowPlaylist';
import useGetFollowedPlaylists from '../hooks/useGetFollowedPlaylists';

function MaterialFollowBtn({ playlistId }) {
  const { mutate: follow } = useFollowPlaylist();
  const { mutate: unFollow } = useUnfollowPlaylist();

  const { data } = useGetFollowedPlaylists();

  function onClickHandler() {
    if (isInPlaylist(playlistId, data.followedPlaylists)) unFollow({ playlistId });
    if (!isInPlaylist(playlistId, data.followedPlaylists)) follow({ playlistId });
  }

  return (
    <>
      <Button variant='outlined' color='primary' onClick={onClickHandler}>
        {data && data.followedPlaylists && !isInPlaylist(playlistId, data.followedPlaylists) ? 'FOLLOW' : 'FOLLOWING'}
      </Button>
    </>
  );
}

export default MaterialFollowBtn;
