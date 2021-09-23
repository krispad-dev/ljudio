import React from 'react';
import { BiAddToQueue } from 'react-icons/bi';
import useAddToCue from '../hooks/useAddToCue';
import styled from 'styled-components';


function AddToCueBtn({ videoId }) {

    const { mutate } = useAddToCue();
    
    return<AddToCueBtnWrapper> 
        <BiAddToQueue className="add-btn" onClick={() => mutate({ videoId })} />
    </AddToCueBtnWrapper>
}

export default AddToCueBtn;


const AddToCueBtnWrapper = styled.div`

    .add-btn {
		font-size: 1.5rem;
		margin-left: 1rem;
		color: #c4c4c4;

		&:hover {
			color: #1dd1a1;
			transition: ease-in-out 0.2s;
			cursor: pointer;
		}
	}

`;