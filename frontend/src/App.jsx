import React, { useContext, useRef, useEffect } from 'react';
import { playerControllerStateContext } from './context/YouTubePlayerContext';
import { UI_STATE_ACTIONS } from './reducers/UiReducer';
import { UiContext } from './context/UiState';

import { Route, Redirect, useLocation } from 'react-router-dom';

import GlobalStyle from './GlobalStyles';

import { useWindowSize } from '@react-hook/window-size';

//hooks
import useAuth from './hooks/useAuth';

// Components

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import YouTubePlayer from './components/YoutubePlayer/YoutubePlayer';
import MusicPage from './pages/MusicPage';
import OnePlaylistPage from './pages/OnePlaylistPage';
import CuePage from './pages/CuePage';
import ArtistPage from './pages/ArtistPage';

import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import AllPlaylistsPage from './pages/AllPlaylistsPage';
import MobileMenu from './components/MobileMenu/MobileMenu';
import ConfirmModal from './components/ConfirmModal';
import VideosPage from './pages/VideosPage';
import SongPage from './pages/SongPage';
import { ThemeProvider } from '@material-ui/core';
import theme from './materialUiTheme';
import { ToastContainer } from 'react-toastify'

const notLoggedInStyles = {
  gridTemplateAreas: "'header header' 'main main' 'footer footer'",
};

function App() {
  const appRef = useRef();

  const { data: auth } = useAuth();
  const { pathname } = useLocation();

  const [{ fullscreenVideoMode }, dispatch] = useContext(playerControllerStateContext);
  const [windowWidth, windowHeight] = useWindowSize();
  const { state, dispatch: dispatchUiContext } = useContext(UiContext);

  useEffect(() => {
    if (windowWidth < 1000 ) {
      dispatchUiContext({type: UI_STATE_ACTIONS.SET_CLOSE_MENU_MOBILE })
    }
  }, [windowWidth])

  return (
    <ThemeProvider theme={theme}>
      <div
        ref={appRef}
        style={(auth && !auth.loggedIn) || fullscreenVideoMode ? notLoggedInStyles : {}}
        className='App'
      >
        <GlobalStyle />

        {pathname !== '/register' && pathname !== '/login' && !fullscreenVideoMode && <Header />}

        <Aside />

        <ConfirmModal />

        <main className={'yt-player-main'}>
          <YouTubePlayer />
        </main>
        {state.mobileMenuIsOpen && windowWidth <= 1000 && auth.loggedIn && <MobileMenu />}
        {!fullscreenVideoMode && (
          <main>
            <ToastContainer />


            <Route exact path='/login' component={LoginPage}>
              {auth && auth.loggedIn && <Redirect to='/' />}
            </Route>
            <Route exact path='/cue' component={CuePage}>
              {auth && !auth.loggedIn && <Redirect to='/' />}
            </Route>

            <Route exact path='/playlists' component={AllPlaylistsPage}>
              {auth && !auth.loggedIn && <Redirect to='/' />}
            </Route>

            <Route exact path='/artist/:id' component={ArtistPage}></Route>

            <Route exact path='/playlist/:id' component={OnePlaylistPage} />

            <Route exact path='/songs/:id' component={SongPage} />
            <Route exact path='/videos' component={VideosPage} />

            <Route exact path='/' component={MusicPage} />
            <Route exact path='/register' component={RegisterPage} />
          </main>
        )}

        {pathname !== '/register' && pathname !== '/login' && <Footer />}
      </div>
    </ThemeProvider>
  );
}

export default App;

// rfce för komponent
// semikolon & single quote
// minst en rad mellan kodblock
