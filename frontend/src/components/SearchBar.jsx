import React, { useContext } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import { UiContext } from '../context/UiState';

import getSong from '../hooks/getSong';

function SearchBar() {
  const { dispatch } = useContext(UiContext);

  async function searchMusic(e) {
    let question = e.target.value;
    const data = await getSong(question);
    console.log(data);
    dispatch({ type: 'SEARCH_MUSIC', payload: { musicData: data } });
  }

  return (
    <SearchBarWrapper>
      <div className='searchInputs'>
        <form>
          <SearchIcon />
          <input type='text' onChange={searchMusic} />
        </form>
      </div>
    </SearchBarWrapper>
  );
}

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  min-width: 250px;
  height: 2rem;
  border-radius: 10px;

  .searchInputs form {
    display: flex;
  }

  .searchInputs input {
    all: unset;
  }

  .searchIcon {
    background-color: #fff;
  }
`;

export default SearchBar;
