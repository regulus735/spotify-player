import React from 'react';
import './Playlist.sass';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { chosenPlaylistActions } from '../store/chosenPlaylist-slice';
import { fetchTracksData } from '../store/chosenPlaylist-actions';

interface PlaylistProps {
   imageUrl: string;
   name: string;
   playlistId: string;
}

const Playlist: React.FC<PlaylistProps> = ({ imageUrl, name, playlistId }) => {
   const dispatch = useAppDispatch();
   const selectedPlaylistId = useAppSelector(
      (state) => state.chosenPlaylist.playlistId
   );
   const handleClick = () => {
      if (playlistId === selectedPlaylistId) return;
      dispatch(
         chosenPlaylistActions.initPlaylist({ playlistName: name, playlistId })
      );
      dispatch(fetchTracksData(playlistId));
   };

   return (
      <button
         className={`playlist ${
            selectedPlaylistId === playlistId && 'selected'
         }`}
         onClick={handleClick}
      >
         <img src={imageUrl} alt="" />
         <span>{name}</span>
      </button>
   );
};

export default Playlist;
