import React, { useContext } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import { UiContext } from '../../context/UiState';

function SearchBar() {
  const { dispatch, state } = useContext(UiContext);

  let timeout = 0;

  async function searchMusic(e) {
    let musicSearchString = e.target.value;

    // Delay function kommer lyftas ut till helpers.js
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      dispatch({
        type: 'SEARCH_STRING',
        payload: { searchString: musicSearchString },
      });
    }, 500);
  }

  return (
    <SearchBarWrapper>
      <div className='searchInputs'>
        <SearchIcon style={{ marginLeft: '1rem' }} />
        <input type='text' onKeyUp={searchMusic} />
      </div>
    </SearchBarWrapper>
  );
}

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: auto;
  height: 2rem;
  border-radius: 50px;
  margin-right: 1rem;

  .searchInputs form {
    display: flex;
  }

  .searchInputs input {
    all: unset;
  }
`;

export default SearchBar;
