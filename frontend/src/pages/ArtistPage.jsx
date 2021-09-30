import React, { useContext, useEffect } from 'react';
import { UiContext } from '../context/UiState';
import { useParams } from 'react-router-dom';
import { UI_STATE_ACTIONS } from '../reducers/UiReducer';
import useGetOneArtist from '../hooks/useGetOneArtist';
import styled from 'styled-components';
import SongsList from '../components/MusicPage/SongsList';
import ShareUrlBtn from '../components/ShareUrlBtn';
import noDescriptionPlaceholder from '../assets/na.svg';

function ArtistPage() {
  const { dispatch } = useContext(UiContext);
  const { id } = useParams();
  const { data } = useGetOneArtist(id);

  const artistAvatarArray = data && data.artist && data.artist.thumbnails && data.artist.thumbnails;
  const artistPicture = artistAvatarArray && artistAvatarArray[artistAvatarArray.length - 1];

  const artistDescription = data && data.artist && data.artist.description && data.artist.description;
  const artistName = data && data.artist && data.artist.name && data.artist.name;

  useEffect(() => {
    dispatch({ type: UI_STATE_ACTIONS.SET_HEADER_SEARCH_STRING, payload: { headerSearchString: artistName } });
  }, [artistName]);

  return (
    <ArtistPageWrapper>
      <div
        className={'background-image'}
        style={{ backgroundImage: `url(${artistPicture ? artistPicture.url : noDescriptionPlaceholder})` }}
      >
        <div className={'bottom-container'}>
          <h1>{artistName}</h1>
          <div>
            <ShareUrlBtn />
          </div>
        </div>
      </div>

      <div
        className='description-container'
        style={{ backgroundImage: `url(${!artistDescription && noDescriptionPlaceholder})` }}
      >
        {artistDescription && <h1>About:</h1>}
        <p>{artistDescription && artistDescription}</p>
      </div>

      <div>
        <SongsList />
      </div>
    </ArtistPageWrapper>
  );
}

export default ArtistPage;

const ArtistPageWrapper = styled.div`
  width: 100%;
  .background-image {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    width: 100%;
    height: 30vh;
    background-position: center;
    background-size: cover;
    .bottom-container {
      width: 95%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      font-weight: 900;
      color: #fff;
      font-size: 3rem;
      align-self: flex-end;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 5px;
    }
  }
  .description-container {
    min-height: 8rem;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;

    @media (max-width: 980px) {
      align-items: center;
      text-align: center;
    }

    background-color: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.03);
    width: 100%;
    height: auto;

    h1 {
      margin: 1rem;
    }
    p {
      margin: 1rem;
      letter-spacing: 1px;
      font-size: 1rem;
      font-weight: 100;
      width: 90%;
    }
  }
`;
