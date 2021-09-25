import React from 'react'
import styled from 'styled-components'
import { ImShuffle } from 'react-icons/im'


function ShuffleBtn() {
    return (
        <ShuffleBtnWrapper>
            <ImShuffle className={'shuffle-btn'}  />
        </ShuffleBtnWrapper>
    )
}

export default ShuffleBtn


const ShuffleBtnWrapper = styled.div`
.shuffle-btn {
    color: #fff;
    &:hover {
        cursor: pointer;
        color: #1dd1a1;

    }
}

`
