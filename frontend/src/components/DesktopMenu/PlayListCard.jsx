import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function PlayListCard({ playlistName, song, url }) {
  return (
    <PlayListCardWrapper>
      <Link to={url}>
        <ul>
          <li>{playlistName}</li>
          <li>{song} songs</li>
        </ul>
      </Link>
    </PlayListCardWrapper>
  );
}

const PlayListCardWrapper = styled.div`
  height: 3rem;
  background-color: #212121;
  border: 2px solid black;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: #c4c4c4;
    cursor: pointer;
    font-size: 14px;
  }
`;

export default PlayListCard;
