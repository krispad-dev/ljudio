import React from 'react';

function SongCard({ videoId, name, artist }) {
    return (
        <div>
            <h1>SongCard</h1>
            {artist.name} - {name}
        </div>
    );
}

export default SongCard;
