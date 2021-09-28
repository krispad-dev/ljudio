import React, { useState } from 'react';
import styled from 'styled-components';

import ShareUrlBtn from '../ShareUrlBtn';
import RemoveUserPlaylist from '../RemoveUserPlaylist';
import MaterialFollowBtn from '../MaterialFollowBtn';
import { FaEdit } from 'react-icons/fa';
import EditPlaylistTitle from './EditPlaylistTitle';

import FollowCountInfo from '../FollowCountInfo';
import SongCount from '../SongCount';

import { useParams } from 'react-router-dom';
import { isInUserPlaylist } from '../../helpers/helpers';

import useGetSongs from '../../hooks/useGetSongs';
import useAuth from '../../hooks/useAuth';
import useGetSavedUserPlaylists from '../../hooks/useGetSavedUserPlaylists';
import useGetOneArtist from '../../hooks/useGetOneArtist';

const fallbackPlaceholderImage =
  'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80';

function PlaylistTitleHeader({ title, playlist }) {
  
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  
  const { id } = useParams();
  const { data } = useGetSongs(playlist && playlist.songs && playlist.songs[0]);
  const { data: auth } = useAuth();
  const { data: userPlaylists } = useGetSavedUserPlaylists();
  const { data: oneArtist } = useGetOneArtist(
    data && data.searchResults && data.searchResults.content[0].artist.browseId
  );

  const playlistArray = userPlaylists && userPlaylists.userPlaylists;
  const playlistTitle = playlist && playlist.title && playlist.title;
  const followCount = playlist && playlist.followCount && playlist.followCount;
  const songCount = playlist && playlist.songs && playlist.songs.length;
  const playlistCoverImage =
    oneArtist && oneArtist.artist && oneArtist.artist.thumbnails && oneArtist.artist.thumbnails[2];
  
  const isSongsInPlaylist = playlist && playlist.songs && playlist.songs.length && playlist.songs.length > 0;

  return (
    <PlaylistTitleHeaderWrapper
      className={'background-image'}
      style={{ backgroundImage: `url(${isSongsInPlaylist && isSongsInPlaylist ? playlistCoverImage && playlistCoverImage.url : fallbackPlaceholderImage})` }}
    >
      <div className={'playlist-title-and-info'}>
        <div className='playlist-info-container'>
          <FollowCountInfo text={followCount} />
          <SongCount text={songCount} />
        </div>

        <div className='title-container'>
          <div>
            {!isEditingTitle && <h1>{playlistTitle}</h1>}
            {!isEditingTitle && isInUserPlaylist(id, playlistArray) && (
              auth && auth.loggedIn &&
              <FaEdit
                onClick={() => setIsEditingTitle(!isEditingTitle)}
                style={{ color: '#1dd1a1', fontSize: '2rem', cursor: 'pointer' }}
              />
            )}
          </div>

          {isEditingTitle && (
            <EditPlaylistTitle
              title={title}
              playlistId={id}
              isEditingTitle={isEditingTitle}
              setIsEditingTitle={setIsEditingTitle}
            />
          )}
        </div>
      </div>

      <div className={'playlist-tools'}>
        <div className='follow-container'>{auth && auth.loggedIn && <MaterialFollowBtn playlistId={id} />}</div>

        <div className={'remove-playlist-container'}>
          {playlist && isInUserPlaylist(id, playlistArray) && auth && auth.loggedIn && (
            <RemoveUserPlaylist playlistId={id} />
          )}
        </div>

        <div className={'share-container'}>
          <ShareUrlBtn />
        </div>
      </div>
    </PlaylistTitleHeaderWrapper>
  );
}

const PlaylistTitleHeaderWrapper = styled.div`
  width: 100%;
  height: 15rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  h1 {
    font-weight: 900;
    color: #fff;
    font-size: 3rem;
    align-self: flex-end;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin: 1rem;
  }

  .playlist-title-and-info {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    .playlist-info-container {
      background-color: rgba(0, 0, 0, 0.5);
    }

    .title-container {
      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .playlist-tools {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 1rem;
    flex-wrap: wrap;

    div {
      margin: 0.3rem;
    }
  }

  @media (max-width: 400px) {
    .title-container h1 {
      font-size: 1.5rem;
    }
  }
`;

export default PlaylistTitleHeader;
