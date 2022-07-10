import { createAsyncThunk } from '@reduxjs/toolkit';

import { chosenPlaylistActions } from './chosenPlaylist-slice';
import request from '../helpers/request';
import ITrack from '../models/track-model';

export const fetchTracksData = createAsyncThunk<ITrack[], string>(
   'chosenPlaylist/fetchTracksData',
   async (playlistId, thunkApi) => {
      thunkApi.dispatch(chosenPlaylistActions.loading());
      const { data, status } = await request.get(
         `/playlists/${playlistId}/tracks`
      );

      if (status === 400) return thunkApi.rejectWithValue(null);

      return data.items.map((item: { track: {} }) => item.track) as ITrack[];
   }
);
