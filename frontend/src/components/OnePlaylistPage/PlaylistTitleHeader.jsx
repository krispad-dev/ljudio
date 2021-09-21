import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ShareUrlBtn from '../ShareUrlBtn';
import RemoveUserPlaylist from '../RemoveUserPlaylist';
import SkeletonLoader from '../Loaders/SkeletonLoader';
import FollowBtn from '../FollowBtn';
import { FaEdit } from 'react-icons/fa';
import EditPlaylistTitle from './EditPlaylistTitle';
import { useQueryClient } from 'react-query';

import { useParams } from 'react-router';
import { isInUserPlaylist } from '../../helpers/helpers';

import useGetSongs from '../../hooks/useGetSongs';
import useGetOneSavedUserPlaylist from '../../hooks/useGetOneSavedUserPlaylist';
import useAuth from '../../hooks/useAuth';
import useGetSavedUserPlaylists from '../../hooks/useGetSavedUserPlaylists';

function PlaylistTitleHeader({ title, playlist }) {

	const [isEditingTitle, setIsEditingTitle] = useState(false);
	const [isChanged, setIsChanged] = useState(false);
	const queryClient = useQueryClient();

	let playlistImg = null;

	const { id } = useParams();
	const { data: auth } = useAuth();
	const { data: userPlaylist } = useGetOneSavedUserPlaylist(id);
	const { data: userPlaylists } = useGetSavedUserPlaylists();

	const { data, isLoading } = useGetSongs(playlist && playlist.songs && playlist.songs[0]);
	playlistImg = data && data.searchResults && data.searchResults.content[0].thumbnails[1].url;

	const playlistId = playlist && playlist.id && playlist.id;
	const playlistArray = userPlaylists && userPlaylists.userPlaylists;

	useEffect(() => {
		
		setTimeout(() => {
			queryClient.fetchQuery(['playlist']);
			queryClient.fetchQuery(['user-playlists']);
		}, 1000);

	}, [isChanged, isEditingTitle]);
	
	return (
		<PlaylistTitleHeaderWrapper>
			{isLoading && <SkeletonLoader />}
			{!isLoading && (
				<>
					<img
						className='playlist-title-img'
						src={
							!playlistImg
								? 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
								: playlistImg
						}
						alt=''
					/>
					<div className='playlist-info'>
						{!isEditingTitle && <h2>{title}</h2>}

						{!isEditingTitle && 
							<FaEdit 
							onClick={() => setIsEditingTitle(true)}
							style={{ color: '#FFF', fontSize: '1.5rem', margin: '1rem' }} />
						}

						{isEditingTitle && 
							<EditPlaylistTitle 
							title={title} 
							playlistId={id}
							isChanged={isChanged}
							setIsChanged={setIsChanged}
							isEditingTitle={isEditingTitle}
							setIsEditingTitle={setIsEditingTitle} />
						}

						{userPlaylist && userPlaylist.playlist && <h4>Songs: {userPlaylist.playlist.songs.length}</h4>}

						<div className='follow-container'>{auth && auth.loggedIn && <FollowBtn playlistId={id} />}</div>

						{playlist && isInUserPlaylist(id, playlistArray) && auth && auth.loggedIn && (
							<RemoveUserPlaylist playlistId={id} />
						)}
						<ShareUrlBtn />
					</div>
				</>
			)}
		</PlaylistTitleHeaderWrapper>
	);
}

const PlaylistTitleHeaderWrapper = styled.div`
	display: flex;

	img {
		width: 100%;
		max-width: 200px;
	}

	.playlist-info {
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		margin-left: 1rem;

		h2 {
			font-size: 1.5rem;
		}

		h3 {
			font-size: 1rem;
		}
	}

	.follow-container {
		width: 120px;
	}

	@media (min-width: 600px) {
		img {
			max-width: 350px;
		}
		.playlist-info {
			h2 {
				font-size: 2.2rem;
			}

			h3 {
				font-size: 1.5rem;
			}
		}
	}
`;

export default PlaylistTitleHeader;
