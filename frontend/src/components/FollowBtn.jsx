import React from 'react';
import { BsHeart } from 'react-icons/bs';
import styled from 'styled-components';
import { isInPlaylist } from '../helpers/helpers'

import useFollowPlaylist from '../hooks/useFollowPlaylist'
import useGetFollowedPlaylists from '../hooks/useGetFollowedPlaylists'
import useUnfollowPlaylist from '../hooks/useUnfollowPlaylist' 

function FollowBtn({ playlistId }) {

	const { mutate: follow } = useFollowPlaylist();
	const { mutate: unFollow } = useUnfollowPlaylist();

	const { data } = useGetFollowedPlaylists();



	if (data && data.followedPlaylists) {
		console.log();	
	}

	function onClickHandler() {
		if (isInPlaylist(playlistId, data.followedPlaylists)) unFollow({ playlistId }) 
		if (!isInPlaylist(playlistId, data.followedPlaylists)) 	follow({ playlistId }) 
	}


	return (
		<FollowBtnWrapper onClick={onClickHandler} >
			<BsHeart 
			className={'follow-playlist-btn'} 
			style={{ margin: '0.5rem', fontSize: ' 1.5rem', 
			color: `${data && data.followedPlaylists && isInPlaylist(playlistId, data.followedPlaylists) ? 'red' : 'white'}` }} />
		</FollowBtnWrapper>
	);
}

export default FollowBtn;

const FollowBtnWrapper = styled.div`
	.follow-playlist-btn {
        color: #fff;

        &:hover {
            color: red;
            cursor: pointer;
            transition: 0.1s ease-in-out;
        }
     
	}

	
`
