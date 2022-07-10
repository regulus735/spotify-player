import { createAsyncThunk } from '@reduxjs/toolkit';
import IPlaylist from '../models/playlist-model';
import request from '../helpers/request';
import { playlistsActions } from './playlists-slice';

export const fetchPlaylistsData = createAsyncThunk<IPlaylist[], void>(
   'playlists/fetchPlaylistsData',
   async (_, thunkApi) => {
      thunkApi.dispatch(playlistsActions.loading());
      const { data, status } = await request.get('/me/playlists');

      if (status === 400) return thunkApi.rejectWithValue(null);

      return data.items as IPlaylist[];
   }
);
