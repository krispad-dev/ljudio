import React from 'react';
import { BsHeart } from 'react-icons/bs';
import styled from 'styled-components';

import useFollowPlaylist from '../hooks/useFollowPlaylist'

function FollowBtn({ playlistId }) {

	const { mutate } = useFollowPlaylist() 

	return (
		<FollowBtnWrapper onClick={() => mutate({ playlistId })} >
			<BsHeart className={'follow-playlist-btn'} style={{ margin: '0.5rem', fontSize: ' 1.5rem' }} />
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
