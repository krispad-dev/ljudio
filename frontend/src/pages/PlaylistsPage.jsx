import React from 'react';
import styled from 'styled-components';
import SongCardItem from '../components/PlaylistsPage/SongCardItem';
import PlaylistCard from '../components/PlaylistsPage/PlaylistCard';
// Hook useGetOneSavedUserPlaylist

function PlaylistsPage() {
  const mockData = [
    { songName: 'Hello', artistName: 'Adel', albumName: 'Cool Album', durration: '03:27' },
    { songName: 'Hits', artistName: 'Lionel Richie', albumName: 'Richie Album', durration: '03:27' },
    { songName: 'Blues', artistName: 'Ice Cube', albumName: 'Top 10 Album', durration: '03:27' },
  ];

  return (
    <PlaylistsPageWrapper>
      <PlaylistCard />
      {mockData.map((item) => {
        return <SongCardItem {...item} />;
      })}
    </PlaylistsPageWrapper>
  );
}

const PlaylistsPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default PlaylistsPage;
