import React from 'react';
import PlayListCardItem from './PlayListCardItem';
import styled from 'styled-components';
import useGetFollowedPlaylists from '../../../hooks/useGetFollowedPlaylists';

function FollowedPlaylists() {
  const { data } = useGetFollowedPlaylists();

  return (
    <FollowingPlayListWrapper>
      {data &&
        data.followedPlaylists &&
        data.followedPlaylists.length > 0 &&
        data.followedPlaylists.map((playlist, i) => {
          return <PlayListCardItem key={i} {...playlist} followItem={true} />;
        })}
      {data && data.followedPlaylists && data.followedPlaylists.length === 0 && <p>No followed lists yet =/</p>}
    </FollowingPlayListWrapper>
  );
}

const FollowingPlayListWrapper = styled.ul`
  animation: dropDown ease-in-out 0.2s;
  @keyframes dropDown {
    from {
      height: 0%;
    }

    to {
      height: 100%;
    }
  }

  height: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
	margin-bottom: 8rem;
	width: 100%;

	overflow: auto;
	/* for Firefox */
	min-height: 0;
  -ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */


`;

export default FollowedPlaylists;
