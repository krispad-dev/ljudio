import React, { useContext } from 'react';
import { playerControllerStateContext } from './context/YouTubePlayerContext';

import { Route, Redirect, useLocation, Switch } from 'react-router-dom';

import GlobalStyle from './GlobalStyles';

import { useWindowSize } from '@react-hook/window-size';

//hooks
import useAuth from './hooks/useAuth';

// Components

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import YouTubePlayer from './components/YoutubePlayer/YoutubePlayer';
import MusicPage from './pages/MusicPage';
import PlaylistsPage from './pages/PlaylistsPage';

import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';

const notLoggedInStyles = {
  gridTemplateAreas: "'header header' 'main main' 'footer footer'",
};

function App() {
  const { data: auth } = useAuth();
  const { pathname } = useLocation();
  const [{ fullscreenVideoMode }, dispatch] = useContext(playerControllerStateContext);
  const [windowWidth, windowHeight] = useWindowSize();

  return (
    <div style={(auth && !auth.loggedIn) || fullscreenVideoMode ? notLoggedInStyles : {}} className='App'>
      <GlobalStyle />

      {pathname !== '/register' && pathname !== '/login' && !fullscreenVideoMode && <Header />}

      <Aside />

      <main>
        <YouTubePlayer />
      </main>

      {!fullscreenVideoMode && (
        <main>

    
          
          <Route exact path='/login' component={LoginPage} >
            {auth && auth.loggedIn && <Redirect to='/' />}
          </Route>

{/*           <Route exact path='/playlist/' component={PlaylistsPage} />  */}
          <Route exact path='/playlist/:id' component={PlaylistsPage} /> 
{/*           <Route exact path='/playlist/following' component={PlaylistsPageFollowing} />  */}
          
          
          <Route exact path='/' component={MusicPage} />
          <Route exact path='/register' component={RegisterPage} />
        </main>
      )}

      {pathname !== '/register' && pathname !== '/login' && <Footer />}
    </div>
  );
}

export default App;

// rfce för komponent
// semikolon & single quote
// minst en rad mellan kodblock
