import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ITrack from '../models/track-model';

interface IPlayer {
   selectedTrackUri: string;
   playlistId: string;
   tracksUris: string[];
}

const initialState: IPlayer = {
   selectedTrackUri: '',
   playlistId: '',
   tracksUris: [],
};

const playerSlice = createSlice({
   name: 'player',
   initialState,
   reducers: {
      setPlaylist(
         state,
         { payload }: PayloadAction<{ playlistId: string; tracks: ITrack[] }>
      ) {
         state.playlistId = payload.playlistId;
         state.tracksUris = payload.tracks.map((item) => item.uri);
      },
      selectTrack(state, { payload }) {
         state.selectedTrackUri = payload;
      },
   },
});

export const playerActions = playerSlice.actions;
export default playerSlice.reducer;
