import React, { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import SearchIcon from '@material-ui/icons/Search';
import { UiContext } from '../../context/UiState';
import { UI_STATE_ACTIONS } from '../../reducers/UiReducer';


function SearchBar() {
  const { dispatch } = useContext(UiContext);
  const { push } = useHistory();

  let timeout = 0;

  async function searchMusic(e) {
    push('/');
    
    let musicSearchString = e.target.value;

    // Delay function kommer lyftas ut till helpers.js
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      dispatch({
        type: UI_STATE_ACTIONS.SET_HEADER_SEARCH_STRING,
        payload: { headerSearchString: musicSearchString },
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
