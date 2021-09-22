import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ShareUrlBtn from '../ShareUrlBtn';
import RemoveUserPlaylist from '../RemoveUserPlaylist';
import SkeletonLoader from '../Loaders/SkeletonLoader';
import MaterialFollowBtn from '../MaterialFollowBtn';
import { FaEdit } from 'react-icons/fa';
import EditPlaylistTitle from './EditPlaylistTitle';
import { useQueryClient } from 'react-query';
import FollowCountInfo from '../FollowCountInfo';
import SongCount from '../SongCount'

import { useParams } from 'react-router-dom';
import { isInUserPlaylist } from '../../helpers/helpers';

import useGetSongs from '../../hooks/useGetSongs';
import useGetOneSavedUserPlaylist from '../../hooks/useGetOneSavedUserPlaylist';
import useAuth from '../../hooks/useAuth';
import useGetSavedUserPlaylists from '../../hooks/useGetSavedUserPlaylists';
import useGetOneArtist from '../../hooks/useGetOneArtist';

const fallbackPlaceholderImage =
	'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80';

function PlaylistTitleHeader({ title, playlist }) {
	const [isEditingTitle, setIsEditingTitle] = useState(false);
	const [isChanged, setIsChanged] = useState(false);
	const queryClient = useQueryClient();

	const { id } = useParams();
	const { data: auth } = useAuth();

	const { data: userPlaylist } = useGetOneSavedUserPlaylist(id);

  console.log(userPlaylist);

	const { data: userPlaylists } = useGetSavedUserPlaylists();
	const playlistArray = userPlaylists && userPlaylists.userPlaylists;

	const { data } = useGetSongs(playlist && playlist.songs && playlist.songs[0]);
	const browseId = data && data.searchResults && data.searchResults.content[0].artist.browseId;

  const playlistTitle = userPlaylist && playlist.title && playlist.title;
  const followCount = userPlaylist && playlist.followCount && playlist.followCount;
  const songCount =  userPlaylist && playlist.songs && playlist.songs.length;




	const { data: oneArtist } = useGetOneArtist(browseId && browseId);
	const plylistCoverImage =
		oneArtist && oneArtist.artist && oneArtist.artist.thumbnails && oneArtist.artist.thumbnails[2];




	useEffect(() => {
		queryClient.fetchQuery(['playlist']);
		queryClient.fetchQuery(['user-playlists']);
	}, [isChanged, isEditingTitle]);

	useEffect(() => {
		setTimeout(() => {
			queryClient.fetchQuery(['artist']);
		}, 500);
	}, [id]);





	return (
		<PlaylistTitleHeaderWrapper
			className={'background-image'}
			style={{ backgroundImage: `url(${plylistCoverImage ? plylistCoverImage.url : fallbackPlaceholderImage})` }}
		>
<div className={'playlist-title-and-info'}>

      <div className="playlist-info-container">
            <FollowCountInfo text={followCount} />
            <SongCount text={songCount} />
          </div>

    <div className="title-container">
            <h1>{playlistTitle}</h1>
          </div>



</div>



			<div className={'playlist-tools'}>

				<div className={'songs-count-container'}>
					{userPlaylist && userPlaylist.playlist && <h4>Songs: {userPlaylist.playlist.songs.length}</h4>}
				</div>

				<div className='follow-container'>
          {auth && auth.loggedIn && <MaterialFollowBtn playlistId={id} />}
          
        </div>

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
      justify-content: space-between;
    }


	.playlist-tools {
    background-color: rgba(0,0,0,0.1);
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
`;

export default PlaylistTitleHeader;

{
	/* <div className={'playlist-tools'}>
{userPlaylist && userPlaylist.playlist && (
  <h4>Songs: {userPlaylist.playlist.songs.length}</h4>
)}

<div className='follow-container'>
  {auth && auth.loggedIn && <MaterialFollowBtn playlistId={id} />}
</div>

{playlist && isInUserPlaylist(id, playlistArray) && auth && auth.loggedIn && (
  <RemoveUserPlaylist playlistId={id} />
)}
<ShareUrlBtn />
</div> */
}

/* 
<div className='playlist-info'>

{!isEditingTitle && (
  <FaEdit
    onClick={() => setIsEditingTitle(true)}
    style={{ color: '#FFF', fontSize: '1.5rem', margin: '1rem' }}
  />
)}

{isEditingTitle && (
  <EditPlaylistTitle
    title={title}
    playlistId={id}
    isChanged={isChanged}
    setIsChanged={setIsChanged}
    isEditingTitle={isEditingTitle}
    setIsEditingTitle={setIsEditingTitle}
  />
)}  */
