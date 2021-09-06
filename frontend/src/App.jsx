import React, { useContext } from 'react';
import { UiContext } from './context/UiState';
import useGetSongs from './hooks/useGetSongs';

// Components
import SearchBar from './components/SearchBar';

import './App.css';

function App() {
  const { state } = useContext(UiContext);

  console.log(state.searchString);

  const { data } = useGetSongs(state.searchString);

  console.log(data);

  return (
    <div className='App'>
      <header>
        <h1>LJUDIO</h1>
        <SearchBar />
      </header>

      <aside></aside>

      <main></main>

      <footer></footer>
    </div>
  );
}

export default App;

// rfce för komponent
// semikolon & single quote
// minst en rad mellan kodblock
