import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

function GridLoader() {
  return (
    <GridLoaderWrap>
      <ContentLoader
        style={{ width: '100%' }}
        height={700}
        speed={2}
        backgroundColor={'rgba(255, 255, 255, 0.06)'}
        foregroundColor={'#333'}
      >
        {/* Small screens */}
        <rect className='small' x='5%' y='0%' rx='3' ry='3' width='90%' height='190' />
        <rect className='small' x='5%' y='200' rx='3' ry='3' width='90%' height='190' />
        <rect className='small' x='5%' y='400' rx='3' ry='3' width='90%' height='190' />

        {/* medium screens */}
        <rect className='medium' x='0.5%' y='0%' rx='3' ry='3' width='49%' height='190' />
        <rect className='medium' x='50.5%' y='0%' rx='3' ry='3' width='49%' height='190' />
        {/* row 2 */}
        <rect className='medium' x='0.5%' y='200' rx='3' ry='3' width='49%' height='190' />
        <rect className='medium' x='50.5%' y='200' rx='3' ry='3' width='49%' height='190' />
        {/* row 3 */}
        <rect className='medium' x='0.5%' y='400' rx='3' ry='3' width='49%' height='190' />
        <rect className='medium' x='50.5%' y='400' rx='3' ry='3' width='49%' height='190' />
        {/* large screens */}
        <rect className='large' x='0%' y='0%' rx='3' ry='3' width='32%' height='190' />
        <rect className='large' x='33%' y='0%' rx='3' ry='3' width='32%' height='190' />
        <rect className='large' x='66%' y='0%' rx='3' ry='3' width='32%' height='190' />
        {/* row 2 */}
        <rect className='large' x='0%' y='200' rx='3' ry='3' width='32%' height='190' />
        <rect className='large' x='33%' y='200' rx='3' ry='3' width='32%' height='190' />
        <rect className='large' x='66%' y='200' rx='3' ry='3' width='32%' height='190' />
        {/* row 3 */}
        <rect className='large' x='0%' y='400' rx='3' ry='3' width='32%' height='190' />
        <rect className='large' x='33%' y='400' rx='3' ry='3' width='32%' height='190' />
        <rect className='large' x='66%' y='400' rx='3' ry='3' width='32%' height='190' />

        {/* extra-large screens*/}
        <rect className='extra-large' x='0%' y='0%' rx='3' ry='3' width='24%' height='190' />
        <rect className='extra-large' x='25%' y='0%' rx='3' ry='3' width='24%' height='190' />
        <rect className='extra-large' x='50%' y='0%' rx='3' ry='3' width='24%' height='190' />
        <rect className='extra-large' x='75%' y='0%' rx='3' ry='3' width='24%' height='190' />
        {/* row 2 */}
        <rect className='extra-large' x='0%' y='200' rx='3' ry='3' width='24%' height='190' />
        <rect className='extra-large' x='25%' y='200' rx='3' ry='3' width='24%' height='190' />
        <rect className='extra-large' x='50%' y='200' rx='3' ry='3' width='24%' height='190' />
        <rect className='extra-large' x='75%' y='200' rx='3' ry='3' width='24%' height='190' />
        {/* row 3 */}
        <rect className='extra-large' x='0%' y='400' rx='3' ry='3' width='24%' height='190' />
        <rect className='extra-large' x='25%' y='400' rx='3' ry='3' width='24%' height='190' />
        <rect className='extra-large' x='75%' y='400' rx='3' ry='3' width='24%' height='190' />
        <rect className='extra-large' x='50%' y='400' rx='3' ry='3' width='24%' height='190' />
      </ContentLoader>
    </GridLoaderWrap>
  );
}

export default GridLoader;

const GridLoaderWrap = styled.div`
  margin-top: 1rem;
  .medium {
    display: none;
  }

  .large {
    display: none;
  }

  .extra-large {
    display: none;
  }

  @media (min-width: 715px) {
    .small {
      display: none;
    }
    .medium {
      display: block;
    }
  }
  @media (min-width: 1275px) {
    .small {
      display: none;
    }
    .medium {
      display: none;
    }
    .large {
      display: block;
    }
  }
  @media (min-width: 1702px) {
    .small {
      display: none;
    }
    .medium {
      display: none;
    }

    .large {
      display: none;
    }
    .extra-large {
      display: block;
    }
  }
`;
