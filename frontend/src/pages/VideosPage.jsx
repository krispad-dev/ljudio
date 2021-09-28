import React from 'react';
import VideoList from '../components/MusicPage/VideoList';
import styled from 'styled-components';

function VideosPage() {
  return (
    <VideosPageWrapper>
      <VideoList />
    </VideosPageWrapper>
  );
}

export default VideosPage;

const VideosPageWrapper = styled.div`
  width: 100%;
`;
