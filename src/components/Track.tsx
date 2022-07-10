import React from 'react';
import './Track.sass';

import ITrack from '../models/track-model';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { playerActions } from '../store/player-slice';

const Track: React.FC<ITrack> = ({ name, album, artists, uri }) => {
   const dispatch = useAppDispatch();
   const { selectedTrackUri, playlistId } = useAppSelector(
      (state) => state.player
   );
   const chosenPlaylist = useAppSelector((state) => state.chosenPlaylist);

   const handleClick = () => {
      if (chosenPlaylist.playlistId !== playlistId)
         dispatch(
            playerActions.setPlaylist({
               playlistId,
               tracks: chosenPlaylist.tracks,
            })
         );

      dispatch(playerActions.selectTrack(uri));
   };

   return (
      <button
         className={`track ${selectedTrackUri === uri && 'selected'}`}
         onClick={handleClick}
      >
         <img
            src={
               album.images.length > 0
                  ? album.images[album.images.length - 1].url
                  : process.env.PUBLIC_URL + '/logo192.png'
            }
            alt=""
         />
         <div className="wrapper">
            <span>{name}</span>
            <span className="artist">
               {artists.map((item) => item.name).join(', ')}
            </span>
         </div>
      </button>
   );
};

export default React.memo(Track);
