import React from 'react';
import { Code } from 'react-content-loader';

export default function SkeletonLoader() {
	return (
		<Code
			style={{ width: '90%', marginTop: ' 3rem ' }}
			animate={true}
			speed={1}
			backgroundColor={'#222'}
			foregroundColor={'#333'}
		/>
	);
}
