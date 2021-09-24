import React from 'react'
import styled from 'styled-components'
import { ImShuffle } from 'react-icons/im'


function ShuffleBtn() {
    return (
        <ShuffleBtnWrapper>
            <ImShuffle style={{color: 'white'}} />
        </ShuffleBtnWrapper>
    )
}

export default ShuffleBtn


const ShuffleBtnWrapper = styled.div`

`
