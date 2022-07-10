import { fetchPlaylistsData } from './playlists-actions';
import { createSlice } from '@reduxjs/toolkit';
import IPlaylist from '../models/playlist-model';

interface IPlaylists {
   playlists: IPlaylist[];
   isLoaded: boolean;
}

const initialState: IPlaylists = {
   playlists: [],
   isLoaded: false,
};

const playlistsSlice = createSlice({
   name: 'playlists',
   initialState,
   reducers: {
      loading(state) {
         state.isLoaded = false;
      },
   },
   extraReducers(builder) {
      builder.addCase(fetchPlaylistsData.fulfilled, (state, { payload }) => {
         state.isLoaded = true;
         state.playlists = payload;
      });
   },
});

export const playlistsActions = playlistsSlice.actions;
export default playlistsSlice.reducer;
