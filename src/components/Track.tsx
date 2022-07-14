import React from 'react';
import './Track.sass';

import ITrack from '../models/track-model';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { playerActions } from '../store/player-slice';

const Track: React.FC<ITrack & { index: number }> = ({
   name,
   album,
   artists,
   uri,
   duration_ms,
   index,
}) => {
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

   const duration_mm_ss = new Date(duration_ms).toISOString().slice(14, 19);

   return (
      <button
         className={`track ${selectedTrackUri === uri && 'selected'}`}
         onClick={handleClick}
      >
         <span className="index">{index}</span>
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
         <span className="duration">{duration_mm_ss}</span>
      </button>
   );
};

export default React.memo(Track);
