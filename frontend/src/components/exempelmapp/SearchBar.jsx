import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import getSong from '../../hooks/getSong';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  function searchMusic(e) {
    let question = e.target.value;
    getSong(question);
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

  form {
    display: flex;
  }

  input {
    all: unset;
  }

  .searchIcon {
    background-color: #fff;

    button {
      all: unset;
      cursor: pointer;
    }
  }
`;

export default SearchBar;
