import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ShareUrlBtn from '../ShareUrlBtn';
import RemoveUserPlaylist from '../RemoveUserPlaylist';
import SkeletonLoader from '../Loaders/SkeletonLoader';
import FollowBtn from '../FollowBtn';
import { FaEdit } from 'react-icons/fa';
import EditPlaylistTitle from './EditPlaylistTitle';
import { useQueryClient } from 'react-query';

import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
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
	const { pathname } = useLocation();
	const { data: auth } = useAuth();
	const { data: userPlaylist } = useGetOneSavedUserPlaylist(id);
	const { data: userPlaylists } = useGetSavedUserPlaylists();

	const { data, isLoading, isFetched } = useGetSongs(playlist && playlist.songs && playlist.songs[0]);
	const browseId = data && data.searchResults && data.searchResults.content[0].artist.browseId;

	const playlistId = playlist && playlist.id && playlist.id;
	const playlistArray = userPlaylists && userPlaylists.userPlaylists;

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

	}, [ id ]);

	return (
		<PlaylistTitleHeaderWrapper>
			<div
				className={'background-image'}
				style={{
					backgroundImage: `url(${plylistCoverImage ? plylistCoverImage.url : fallbackPlaceholderImage})`,
				}}
			>
				{isLoading && <SkeletonLoader />}
				{!isLoading && (
					<>
						<div className='playlist-info'>
							{!isEditingTitle && <h2>{title}</h2>}

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
							)}

							{userPlaylist && userPlaylist.playlist && (
								<h4>Songs: {userPlaylist.playlist.songs.length}</h4>
							)}

							<div className='follow-container'>
								{auth && auth.loggedIn && <FollowBtn playlistId={id} />}
							</div>

							{playlist && isInUserPlaylist(id, playlistArray) && auth && auth.loggedIn && (
								<RemoveUserPlaylist playlistId={id} />
							)}
							<ShareUrlBtn />
						</div>
					</>
				)}
			</div>
		</PlaylistTitleHeaderWrapper>
	);
}

const PlaylistTitleHeaderWrapper = styled.div`
	.background-image {
		width: 100%;
		height: 15rem;
		background-position: center;
	}

	display: flex;

	img {
		width: 100%;
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
