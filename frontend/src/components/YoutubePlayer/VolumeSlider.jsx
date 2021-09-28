import React, { useContext } from 'react';
import Slider from '@material-ui/core/Slider';
import { playerControllerStateContext } from '../../context/YouTubePlayerContext';
import styled from 'styled-components';
import { GiSpeaker } from 'react-icons/gi';

export default function VolumeSlider() {
	const [{ setVolume }] = useContext(playerControllerStateContext);

	const [value, setValue] = React.useState(30);
	const handleChange = (event, newValue) => {
		setValue(newValue);
		setVolume(value);
	};
	

	return (
		<VolumeSliderContainer>
			<GiSpeaker style={{ color: '#fff', fontSize: '1.5rem', marginRight: '1rem' }} />
			<Slider
				style={{ margin: '0rem 1rem' }}
				value={value}
				onChange={handleChange}
				aria-labelledby='continuous-slider'
				style={{color: '#fff'}}
			/>
			<h6>{value}%</h6>
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
	h6 {
		margin-left: 1rem;
	}
`;
