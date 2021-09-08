import React, { useState, useContext } from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import { UiContext } from './context/UiState';

//hooks
import useGetSongs from './hooks/useGetSongs';
import useAuth from './hooks/useAuth';

// Components
import Test from './components/test';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SearchBar from './components/SearchBar';
import PlayerController from './components/YoutubePlayer/PlayerController';
import YouTubePlayer from './components/YoutubePlayer/YoutubePlayer';
import Logo from './components/Logo';

import './App.css';

function App() {
  const { state } = useContext(UiContext);

  const { data: auth } = useAuth();

  const { data } = useGetSongs(state.searchString);

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
          <Route exact path='/login' component={LoginPage}>
            {auth && auth.loggedIn && <Redirect to='/test' />}
          </Route>
          <Route exact path='/test' component={Test}>
            {auth && !auth.loggedIn && <Redirect to='/login' />}
          </Route>
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
