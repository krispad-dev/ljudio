import React, { useContext } from 'react';
import { UiContext } from './context/UiState';

// Components
import SearchBar from './components/SearchBar';

import './App.css';

function App() {
  const { state } = useContext(UiContext);

  console.log(state.musicData);

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
