import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useRouteMatch } from 'react-router-dom';
import SongCardItem from './SongCardItem'
import useGetOneSavedUserPlaylist from '../../hooks/useGetOneSavedUserPlaylist';

function PlaylistList({ match }) {

  const id = match.params.id
/* 
  let { id } = useParams(); */
/*   const {  } = useRouteMatch(); */
  const { data } = useGetOneSavedUserPlaylist(id);

  console.log(id);



  return (
    <PlayListCaPlaylistListWrapper>
      <h4>{data && data.playlist && data.playlist.title}</h4>
      { data && data.playlist.songs && data.playlist.songs.map((song) =>  <SongCardItem song={song} />)}
    </PlayListCaPlaylistListWrapper>
  );
}

const PlayListCaPlaylistListWrapper = styled.div`
  width: auto;
`;

export default PlaylistList;
