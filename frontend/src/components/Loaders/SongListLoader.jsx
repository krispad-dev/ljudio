import React from 'react';
import ContentLoader from 'react-content-loader';

export default function SongListLoader() {
  return (
    <ContentLoader
      style={{ width: '100%' }}
      height={400}
      speed={2}
      backgroundColor={'rgba(255, 255, 255, 0.06)'}
      foregroundColor={'#333'}
    >
      <rect x='0' y='20' rx='3' ry='3' width='99%' height='50' />
      <rect x='0' y='75' rx='3' ry='3' width='99%' height='50' />
      <rect x='0' y='130' rx='3' ry='3' width='99%' height='50' />
      <rect x='0' y='185' rx='3' ry='3' width='99%' height='50' />
      <rect x='0' y='240' rx='3' ry='3' width='99%' height='50' />
    </ContentLoader>
  );
}
