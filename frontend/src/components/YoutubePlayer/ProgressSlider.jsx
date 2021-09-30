import React, { useContext, useState, useEffect } from 'react';
import Slider from '@material-ui/core/Slider';
import { playerControllerStateContext } from '../../context/YouTubePlayerContext';
import styled from 'styled-components';
import { getTime } from '../../helpers/helpers';

export default function ProgressSlider({ durationInMinutes }) {
  const [{ seekTo, currentTime }] = useContext(playerControllerStateContext);

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    seekTo(value);
  };

  useEffect(() => {
    setValue(Math.floor(currentTime));
  }, [currentTime]);

  return (
    <VolumeSliderContainer>
      <h6 className={'currentDuration'}>{getTime(value)}</h6>
      <Slider
        max={durationInMinutes}
        value={value}
        onChange={handleChange}
        aria-labelledby='continuous-slider'
        style={{ color: '#fff' }}
      />
      <h6 className={'songLength'}>{getTime(durationInMinutes)}</h6>
    </VolumeSliderContainer>
  );
}

const VolumeSliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25vw;
  margin: 0rem 2rem;
  @media (max-width: 1000px) {
    width: 80vw;
  }
  .currentDuration {
    margin-right: 1rem;
  }
  .songLength {
    margin-left: 1rem;
  }
`;
