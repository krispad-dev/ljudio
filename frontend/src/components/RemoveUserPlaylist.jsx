import React, { useContext, useEffect } from 'react';
import { UiContext } from '../context/UiState';
import { UI_STATE_ACTIONS } from '../reducers/UiReducer';
import { FaTrashAlt } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import useRemoveUserPlayList from '../hooks/useRemoveUserPlaylist';


function RemoveUserPlaylist({ playlistId }) {

    const { mutate } = useRemoveUserPlayList();
    const { state, dispatch } = useContext(UiContext);
    
    function openModal() {

      dispatch({
        type: UI_STATE_ACTIONS.SET_MODAL_IS_OPEN,
        payload: {
          modalText: 'DELETE PLAYLIST?',
          confirmAction: UI_STATE_ACTIONS.DELETE_PLAYLIST,
          pushDir: '/'
        }
      });

      dispatch({
        type: UI_STATE_ACTIONS.SET_PLAYLIST_ID_TO_REMOVE,
        payload: { playlistId }
      });

    }

    useEffect(() => {

      if(state.isDeletingPlaylist) {
        mutate({ id: state.playlistIdToRemove });
        dispatch({ type: UI_STATE_ACTIONS.RESET_DELETING_PLAYLIST });
      }
        
    }, [state.isDeletingPlaylist]);

    return (
        <Button 
        variant="outlined"
        color="primary"
        endIcon={<FaTrashAlt />}
        onClick={() => openModal()}>
          DELETE
        </Button>
    );

}

export default RemoveUserPlaylist;
