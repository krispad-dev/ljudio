import React from 'react';
import styled from 'styled-components';

function PlayListCard({ playlistName, song }) {
  return (
    <PlayListCardWrapper>
      <h1>{playlistName}</h1>
      <p>{song} songs</p>
    </PlayListCardWrapper>
  );
}

const PlayListCardWrapper = styled.div`
  //background-color: #fff;
`;

export default PlayListCard;
