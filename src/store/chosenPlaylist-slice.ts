import { fetchTracksData } from './chosenPlaylist-actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ITrack from '../models/track-model';

interface IChosenPlaylist {
   playlistId: string;
   playlistName: string;
   tracks: ITrack[];
   isEveryTrackLoaded: boolean;
}

const initialState: IChosenPlaylist = {
   playlistId: '',
   playlistName: '',
   tracks: [],
   isEveryTrackLoaded: false,
};

const chosenPlaylistSlice = createSlice({
   name: 'chosenPlaylist',
   initialState,
   reducers: {
      initPlaylist(
         state,
         action: PayloadAction<{ playlistName: string; playlistId: string }>
      ) {
         state.playlistName = action.payload.playlistName;
         state.playlistId = action.payload.playlistId;
      },
      loading(state) {
         state.isEveryTrackLoaded = false;
      },
   },
   extraReducers(builder) {
      builder.addCase(fetchTracksData.fulfilled, (state, { payload }) => {
         state.isEveryTrackLoaded = true;
         state.tracks = payload;
      });
   },
});

export const chosenPlaylistActions = chosenPlaylistSlice.actions;
export default chosenPlaylistSlice.reducer;
