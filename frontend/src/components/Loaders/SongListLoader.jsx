import React from 'react';
import ContentLoader from 'react-content-loader';

export default function SongListLoader() {
  return (
    <ContentLoader
      style={{ width: '98%' }}
      height={500}
      speed={2}
      backgroundColor={'rgba(255, 255, 255, 0.06)'}
      foregroundColor={'#333'}
    >
      <rect x='20' y='20' rx='3' ry='3' width='99%' height='50' />
      <rect x='20' y='75' rx='3' ry='3' width='99%' height='50' />
      <rect x='20' y='130' rx='3' ry='3' width='99%' height='50' />
      <rect x='20' y='185' rx='3' ry='3' width='99%' height='50' />
    </ContentLoader>
  );
}
