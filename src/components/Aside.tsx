import React, { useEffect } from 'react';
import './Aside.sass';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchPlaylistsData } from '../store/playlists-actions';
import Playlist from './Playlist';

const Playlists: React.FC = () => {
   const dispatch = useAppDispatch();
   const playlists = useAppSelector((state) => state.playlists);

   useEffect(() => {
      const fetchData = async () => {
         dispatch(fetchPlaylistsData());
      };

      fetchData();
   }, [dispatch]);

   const playlistsContainer = playlists.playlists.map((item) => (
      <Playlist
         key={item.id}
         imageUrl={item.images[item.images.length - 1]?.url}
         name={item.name}
         playlistId={item.id}
      />
   ));

   return (
      <aside className="aside">
         {!playlists.isLoaded && <span>Loading...</span>}
         {playlists.isLoaded && playlistsContainer}
      </aside>
   );
};

export default Playlists;
