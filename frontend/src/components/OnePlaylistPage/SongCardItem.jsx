import React from 'react';
import { useLocation } from 'react-router';

import styled from 'styled-components';
import useGetSongs from '../../hooks/useGetSongs';
import MusicPlayBtn from '../MusicPlayBtn';
import RemoveSongFromPlaylistBtn from '../RemoveSongFromPlaylistBtn';
import useGetSavedUserPlaylists from '../../hooks/useGetSavedUserPlaylists';
import useAuth from '../../hooks/useAuth';
import AddToPlaylistBtn from '../AddToPlaylistBtn';
import SkeletonLoader from '../Loaders/SkeletonLoader';
import AddToCueBtn from '../AddToCueBtn';
import RemoveFromCueBtn from '../RemoveFromCueBtn';
import { useParams } from 'react-router-dom'; 

//HELPER
import { durationConverter } from '../../helpers/helpers';
import { isInUserPlaylist } from '../../helpers/helpers';

function SongCardItem({ song, index, cueId }) {
	//VideoID (song-prop) får göra en förfågan till Youtbe-api.

	const { id } = useParams()
	const { data, isLoading } = useGetSongs(song);
	const { data: auth } = useAuth();
	const { pathname } = useLocation();
	const { data: userPlaylists } = useGetSavedUserPlaylists();

	const fallbackDataString = data
	&& data.searchResults
	&& data.searchResults.content 
	&& data.searchResults.content[0];


	const thumbnailImg = fallbackDataString && fallbackDataString.thumbnails[1].url;
	const artistName = fallbackDataString && fallbackDataString.artist && fallbackDataString.artist.name;
	const songName = fallbackDataString && fallbackDataString.name; 
	const duration = fallbackDataString && fallbackDataString.duration;



	return (
		<>
			{data && data.searchResults && data.searchResults.content[0] && (
				<PlaylistsCardWrapper>
					{isLoading && <SkeletonLoader />}
					{!isLoading && (
				
							<div className='song-container'>
								<div className='song-img-container'>
									<img
										src={thumbnailImg && thumbnailImg}
										alt='song-cover'
									/>
								</div>
								<div className='song-artist-container'>
									<h2>{songName && songName}</h2>
									<h3>{artistName && artistName}</h3>
								</div>

								<div className='song-duration-container'>
									<h2>Duration</h2>
									<h3>{durationConverter(duration && duration)}</h3>
								</div>
								<div className='song-icon-container'>
								{auth && auth.loggedIn && <AddToPlaylistBtn videoId={song} />}

								{userPlaylists &&
										userPlaylists.userPlaylists &&
										auth.loggedIn &&
										isInUserPlaylist(id, userPlaylists.userPlaylists) && (
											<RemoveSongFromPlaylistBtn videoId={song} playlistId={id} />
										)}
									
									<MusicPlayBtn
										index={index}
										videoId={song}
										name={songName && songName}
										artist={artistName && artistName}
										thumbnails={thumbnailImg && thumbnailImg}
									/>

								{auth && auth.loggedIn && pathname !== '/cue' && <AddToCueBtn videoId={song} cueId={cueId} />}
		   						{auth && auth.loggedIn && pathname === '/cue' && <RemoveFromCueBtn videoId={song} cueId={cueId} />}
	
								</div>
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
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.song-icon-container {
		margin-right: 2rem ;
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
