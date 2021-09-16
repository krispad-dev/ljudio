import React from 'react';
import styled from 'styled-components';
import AddMusicToOnePlaylistItem from './AddMusicToOnePlaylistItem';
import useGetSavedUserPlaylists from '../../../hooks/useGetSavedUserPlaylists';

function AddMusicToOnePlayListList() {
  const { data } = useGetSavedUserPlaylists();

  console.log(data);

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
  height: auto;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  right: 20rem;
  top: 25rem;
  border-radius: 5px;
`;

export default AddMusicToOnePlayListList;
