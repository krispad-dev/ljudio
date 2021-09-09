import React, { useContext } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import { UiContext } from '../../context/UiState';

function SearchBar() {
  const { dispatch, state } = useContext(UiContext);

  async function searchMusic(e) {
    let musicSearchString = e.target.value;

    dispatch({
      type: 'SEARCH_STRING',
      payload: { searchString: musicSearchString },
    });
  }

  return (
    <SearchBarWrapper>
      <div className='searchInputs'>
        <form>
          <SearchIcon style={{marginLeft: '1rem' }}/>
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
