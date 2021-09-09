import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styled from 'styled-components';

function FavoritePlayList() {
  return (
    <FavoritePlayListWrapper>
      <h1>Favorites</h1>
      <FavoriteIcon />
    </FavoritePlayListWrapper>
  );
}

const FavoritePlayListWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #c4c4c4;
  margin-bottom: 10px;
  margin-top: 10px;

  h1 {
    margin-right: 10px;
    font-size: 16px;
    color: #c4c4c4;
  }
`;

export default FavoritePlayList;
