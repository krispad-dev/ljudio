import React, { useContext } from 'react';
import { UiContext } from '../../../context/UiState'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { UI_STATE_ACTIONS } from '../../../reducers/UiReducer'

function PlayListCardItem({ title, id }) {

  const { state, dispatch } = useContext(UiContext)

  return (
    <PlayListCardItemWrapper>
      <Link onClick={() => dispatch({type: UI_STATE_ACTIONS.SET_PLAYLIST_ID_TO_SAVE, payload: { playlistIdToSave: id } })} to={`/playlist/${id}`}>
        <p>{title}</p>
      </Link>
    </PlayListCardItemWrapper>
  );
}

const PlayListCardItemWrapper = styled.li`
&:hover {
  opacity: 60%;
  transition: 0.2s ease-in-out;
} 
  height: 3rem;
  background-color: #212121;
  border: 3px solid black;
  display: flex;
  align-items: center;
  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
  }
`;

export default PlayListCardItem;
