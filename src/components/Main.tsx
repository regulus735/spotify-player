import React from 'react';
import Loading from './Loading';
import Player from './Player';
import Track from './Track';
import { useAppSelector } from '../store/hooks';
import './Main.sass';

const Main: React.FC = () => {
   const playlistTracks = useAppSelector((state) => state.chosenPlaylist);

   const tracksContainer = playlistTracks.tracks.map((item) => (
      <Track
         key={item.uri}
         name={item.name}
         album={item.album}
         artists={item.artists}
         uri={item.uri}
      />
   ));

   return (
      <main className="main">
         <h1>{playlistTracks.playlistName}</h1>
         <div className="tracts-list">
            {playlistTracks.isEveryTrackLoaded && tracksContainer}
            {!playlistTracks.isEveryTrackLoaded &&
               playlistTracks.playlistId && <Loading />}
         </div>
         <Player />
      </main>
   );
};

export default Main;
