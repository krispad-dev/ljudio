import React, { useContext } from 'react';
import { UiContext } from '../../context/UiState';
import styled from 'styled-components';
import useGetSongs from '../../hooks/useGetSongs';
import MusicPlayBtn from '../MusicPlayBtn';
import RemoveSongFromPlaylistBtn from '../RemoveSongFromPlaylistBtn';
import useGetSavedUserPlaylists from '../../hooks/useGetSavedUserPlaylists';
import useAuth from '../../hooks/useAuth';
import AddMusicToOnePlayListList from './AddMusicToOnePlaylistPage/AddMusicToOnePlayListList';
import AddToPlaylistBtn from '../AddToPlaylistBtn';
import SkeletonLoader from '../Loaders/SkeletonLoader';

//HELPER
import { durationConverter } from '../../helpers/helpers';
import { isInUserPlaylist } from '../../helpers/helpers';

function SongCardItem({ song, playlistId, index }) {
	//Video ID får göra en förfågan till Youtbe-api.

	const { data, isLoading } = useGetSongs(song);
	const { data: auth } = useAuth();
	const { state } = useContext(UiContext);
	const { data: userPlaylists } = useGetSavedUserPlaylists();

	return (
		<>
			{data && data.searchResults && data.searchResults.content[0] && (
				<PlaylistsCardWrapper>
					{isLoading && <SkeletonLoader />}
					{!isLoading && (
				
							<div className='song-container'>
								<div className='song-img-container'>
									<img
										src={data && data.searchResults.content[0].thumbnails[1].url}
										alt='song-cover'
									/>
								</div>
								<div className='song-artist-container'>
									<h2>{data && data.searchResults.content[0].name}</h2>
									<h3>{data && data.searchResults.content[0].artist.name}</h3>
								</div>

								<div className='song-duration-container'>
									<h2>Duration</h2>
									<h3>{data && durationConverter(data.searchResults.content[0].duration)}</h3>
								</div>
								<div className='song-icon-container'>
								{auth && auth.loggedIn && <AddToPlaylistBtn videoId={song} />}
									<MusicPlayBtn
										index={index}
										videoId={song}
										name={data && data.searchResults.content[0].name}
										artist={data && data.searchResults.content[0].artist.name}
										thumbnails={data && data.searchResults.content[0].thumbnails[1].url}
									/>
									{userPlaylists &&
										userPlaylists.userPlaylists &&
										auth.loggedIn &&
										isInUserPlaylist(playlistId, userPlaylists.userPlaylists) && (
											<RemoveSongFromPlaylistBtn videoId={song} playlistId={playlistId} />
										)}
	
								</div>
								{state.saveSongToPlaylistSelectorSectionIsOpen && <AddMusicToOnePlayListList />}
							</div>
		
					)}
				</PlaylistsCardWrapper>
			)}
		</>
	);
}

const PlaylistsCardWrapper = styled.div`

	.song-container {

		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: rgba(255, 255, 255, 0.02);
		margin: 0.3rem;
	}

	.song-img-container,
	.song-artist-container,
	.song-album-container,
	.song-duration-container {
		width: 90%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.song-icon-container {
		width: 40%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	.song-img-container {
		img {
			border-radius: 2px;
			max-width: 50px;
		}
	}
`;

export default SongCardItem;
