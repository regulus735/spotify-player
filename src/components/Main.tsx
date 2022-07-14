import React from 'react';
import Loading from './Loading';
import Player from './Player';
import Track from './Track';
import { useAppSelector } from '../store/hooks';
import './Main.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const Main: React.FC = () => {
   const playlistTracks = useAppSelector((state) => state.chosenPlaylist);

   const tracksContainer = playlistTracks.tracks.map((item, index) => (
      <Track
         key={item.uri}
         name={item.name}
         album={item.album}
         artists={item.artists}
         uri={item.uri}
         duration_ms={item.duration_ms}
         index={index + 1}
      />
   ));

   return (
      <main className="main">
         <h1>{playlistTracks.playlistName}</h1>
         {!playlistTracks.isEveryTrackLoaded && playlistTracks.playlistId && (
            <Loading />
         )}

         <div className="tracks-list">
            {playlistTracks.isEveryTrackLoaded && (
               <>
                  <header>
                     <span className="index">#</span>
                     <span className="title">Title</span>
                     <span className="duration">
                        <FontAwesomeIcon icon={faClock} />
                     </span>
                  </header>
                  {tracksContainer}
               </>
            )}
         </div>

         <Player />
      </main>
   );
};

export default Main;
