import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import playlistsReducer from './playlists-slice';
import playerReducer from './player-slice';
import chosenPlaylistReducer from './chosenPlaylist-slice';

const store = configureStore({
   reducer: {
      auth: authReducer,
      playlists: playlistsReducer,
      player: playerReducer,
      chosenPlaylist: chosenPlaylistReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
