import React from 'react';
import styled from 'styled-components';

function PlaylistCard() {
  return (
    <PlayListCardWrapper>
      {/* PlaceHolder */}
      <h4>PlayList</h4>
      {/* PlaceHolder */}
      <h1>Playlist Name</h1>
    </PlayListCardWrapper>
  );
}

const PlayListCardWrapper = styled.div`
  width: auto;
`;

export default PlaylistCard;
