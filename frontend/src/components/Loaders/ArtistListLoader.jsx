import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

function ArtistListLoader() {
  return (
    <ArtistListLoaderWrap>
      <ContentLoader
        style={{ width: '98%' }}
        height={500}
        speed={2}
        backgroundColor={'rgba(255, 255, 255, 0.06)'}
        foregroundColor={'#333'}
      >
        {/* Mobile */}
        <rect className='mobile' x='0%' y='0%' rx='3' ry='3' width='90%' height='190' />
        <rect className='mobile' x='0%' y='200' rx='3' ry='3' width='90%' height='190' />
        <rect className='mobile' x='0%' y='400' rx='3' ry='3' width='90%' height='190' />
        {/* 
        {/* tablet */}
        <rect className='tablet' x='0%' y='0%' rx='3' ry='3' width='49%' height='190' />
        <rect className='tablet' x='50%' y='0%' rx='3' ry='3' width='49%' height='190' />
        {/* row 2 */}
        <rect className='tablet' x='0%' y='200' rx='3' ry='3' width='49%' height='190' />
        <rect className='tablet' x='50%' y='200' rx='3' ry='3' width='49%' height='190' />
        {/* row 3 */}
        <rect className='tablet' x='0%' y='400' rx='3' ry='3' width='49%' height='190' />
        <rect className='tablet' x='50%' y='400' rx='3' ry='3' width='49%' height='190' />
        {/* large */}
        <rect className='desktop' x='0%' y='0%' rx='3' ry='3' width='24%' height='190' />
        <rect className='desktop' x='25%' y='0%' rx='3' ry='3' width='24%' height='190' />
        <rect className='desktop' x='50%' y='0%' rx='3' ry='3' width='24%' height='190' />
        <rect className='desktop' x='75%' y='0%' rx='3' ry='3' width='24%' height='190' />
        {/* row 2 */}
        <rect className='desktop' x='0%' y='200' rx='3' ry='3' width='24%' height='190' />
        <rect className='desktop' x='25%' y='200' rx='3' ry='3' width='24%' height='190' />
        <rect className='desktop' x='50%' y='200' rx='3' ry='3' width='24%' height='190' />
        <rect className='desktop' x='75%' y='200' rx='3' ry='3' width='24%' height='190' />
        {/* row 3 */}
        <rect className='desktop' x='0%' y='400' rx='3' ry='3' width='24%' height='190' />
        <rect className='desktop' x='25%' y='400' rx='3' ry='3' width='24%' height='190' />
        <rect className='desktop' x='75%' y='400' rx='3' ry='3' width='24%' height='190' />
        <rect className='desktop' x='50%' y='400' rx='3' ry='3' width='24%' height='190' />
      </ContentLoader>
    </ArtistListLoaderWrap>
  );
}

export default ArtistListLoader;

const ArtistListLoaderWrap = styled.div`
  .tablet {
    display: none;
  }
  .desktop {
    display: none;
  }

  @media (min-width: 480px) {
    .mobile {
      display: none;
    }
    .tablet {
      display: block;
    }
  }
  @media (min-width: 768px) {
    .mobile {
      display: none;
    }
    .tablet {
      display: none;
    }
    .desktop {
      display: block;
    }
  }
`;
