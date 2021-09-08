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
  justify-content: space-around;
  color: #fff;
`;

export default FavoritePlayList;
