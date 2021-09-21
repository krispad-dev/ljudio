import React from 'react';
import useGetMusicVideos from '../../hooks/useGetMusicVideos';
import VideoCard from './VideoCard';

function VideoList() {
  const { data } = useGetMusicVideos('rem');

  console.log(data);

  return (
    <div>
      <VideoCard />
    </div>
  );
}

export default VideoList;
