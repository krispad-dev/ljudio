import React from 'react';
import styled from 'styled-components';
import AddMusicToOnePlaylistItem from './AddMusicToOnePlaylistItem';
import useGetSavedUserPlaylists from '../../../hooks/useGetSavedUserPlaylists';

function AddMusicToOnePlayListList() {
  const { data } = useGetSavedUserPlaylists();

  return (
    <AddMusicToOnePlayListListWrapper>
      {data && data.userPlaylists && data.userPlaylists.map((playlist) => <AddMusicToOnePlaylistItem {...playlist} />)}
    </AddMusicToOnePlayListListWrapper>
  );
}

const AddMusicToOnePlayListListWrapper = styled.div`
  animation: grow ease-in-out 0.1s;

  @keyframes grow {
    from {
      transform: scale(0%);
    }

    to {
      transform: scale(100%);
    }
  }

  width: auto;
  background-color: #000;
  position: absolute;
  right: 9rem;
  top: 20rem;
  border-radius: 5px;
  max-height: 25vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 600px) {
    right: 9.5rem;
    top: 30rem;
  }

  @media (min-width: 650px) {
    right: 9.5rem;
    top: 30rem;
  }

  @media (min-width: 1300px) {
    right: 12rem;
    top: 22rem;
  }

  @media (min-width: 1800px) {
    right: 18rem;
    top: 30rem;
  }
`;

export default AddMusicToOnePlayListList;
