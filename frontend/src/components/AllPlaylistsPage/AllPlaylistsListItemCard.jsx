import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import FollowBtn from '../FollowBtn';

import { FaUser } from 'react-icons/fa';

function AllPlaylistsListItemCard({ title, userName, playlistId, followCount, bgColor }) {
  return (
    <AllPlaylistsListItemCardWrapper style={{ backgroundColor: bgColor }}>
      <Link className='link' to={`/playlist/${playlistId}`}>
        <div className={'background-image'}>
          {' '}
          <h1>{title}</h1>
        </div>
        <div className={'info-container'}>
          <h3>By: {userName}</h3>
          <h3>
            <FaUser /> {followCount}
          </h3>
        </div>
      </Link>
      <FollowBtn />
    </AllPlaylistsListItemCardWrapper>
  );
}

export default AllPlaylistsListItemCard;

const AllPlaylistsListItemCardWrapper = styled.div`
  h1 {
    font-family: 'Monoton', cursive;
    font-size: 2.3rem;
    color: black;
    font-weight: bold;
  }

  &:hover {
    transform: scale(1.01);
    opacity: 80%;
    transition: ease-in-out 0.2s;
    cursor: pointer;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .link {
    width: 50%;
    height: 100%;
  }

  .info-container {
    width: 100%;
    height: 50%;
    display: flex;

    justify-content: space-around;
    text-align: flex-start;
  }

  .background-image {
    box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 50%;
    border-radius: 5px;

    background-position: center;
    background-size: cover;
  }

  background-color: pink;
  background-position: center;
  background-size: cover;
  border-radius: 5px;

  h3 {
    align-self: center;
    color: #fff;
    width: 50%;
    font-size: 1.3rem;
    font-weight: 400;
    width: 100%;
  }
`;
// function AllPlaylistsListItemCard({ title, userName, playlistId }) {
//   return (
//     <AllPlaylistsListItemCardWrapper>
//       <div>
//         <Link to={`/playlist/${playlistId}`}>
//           <div
//             className='bg-image'
//             style={{
//               backgroundImage: `url(https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&=crop&w=1050&q=80)`,
//             }}
//           ></div>
//         </Link>
//       </div>

//       <div className='info-container'>
//         <div>
//           <h2>{title}</h2>
//           <h4>By: &nbsp; {userName}</h4>
//         </div>

//         <FollowBtn playlistId={playlistId} />
//       </div>
//     </AllPlaylistsListItemCardWrapper>
//   );
// }

// export default AllPlaylistsListItemCard;

// const AllPlaylistsListItemCardWrapper = styled.div`
//   display: flex;
//   flex-direction: column;

//   .info-container {
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-start;
//     margin-bottom: 1rem;
//   }
//   .bg-image {
//     border-radius: 2px;
//     height: 10rem;
//     width: auto;
//     background-position: cenetr;
//     background-size: cover;
//     &:hover {
//       transform: scale(1.02);
//       opacity: 60%;
//       cursor: pointer;
//     }
//   }
// `;
