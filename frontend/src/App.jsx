import React, { useState, useContext } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { UiContext } from './context/UiState';
import useGetSongs from './hooks/useGetSongs';

// Components
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SearchBar from './components/SearchBar';
import PlayerController from './components/YoutubePlayer/PlayerController';
import YouTubePlayer from './components/YoutubePlayer/YoutubePlayer';
import Logo from './components/Logo';

import './App.css';

function App() {
  const { state } = useContext(UiContext);

  console.log(state.searchString);

  const { data } = useGetSongs(state.searchString);

  console.log(data);

  return (
    <div className='App'>
      <BrowserRouter>
        <header>
          <Logo />

          <SearchBar />
          <Link to='/register'>REGISTER</Link>
          <Link to='/login'>Login</Link>
        </header>

        <aside></aside>
        <main>
          <YouTubePlayer />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/login' component={LoginPage} />
        </main>
        <footer>
          <PlayerController />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

// rfce för komponent
// semikolon & single quote
// minst en rad mellan kodblock
