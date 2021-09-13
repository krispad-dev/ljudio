import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import SongCardItem from '../components/PlaylistsPage/SongCardItem';
import PlaylistCard from '../components/PlaylistsPage/PlaylistCard';
import useGetOneSavedUserPlaylist from '../hooks/useGetOneSavedUserPlaylist';

function PlaylistsPage() {
  let { id } = useParams();

  const { data } = useGetOneSavedUserPlaylist(id);

  return (
    <PlaylistsPageWrapper>
      <PlaylistCard />
      {/* {mockData.map((item) => {
        return <SongCardItem {...item} />;
      })} */}
    </PlaylistsPageWrapper>
  );
}

const PlaylistsPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default PlaylistsPage;
