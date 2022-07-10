import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import IAuth from '../models/auth-model';

interface IRefreshAuthData {
   accessToken: string;
   expiresIn: number;
}

export const fetchAuthToken = createAsyncThunk<IAuth, string>(
   'auth/fetchAuthToken',

   async (code, thunkApi) => {
      const { data, status } = await axios.post('http://localhost:3001/login', {
         code,
      });

      if (status === 400) return thunkApi.rejectWithValue(null);

      return data as IAuth;
   }
);

export const refreshAuthToken = createAsyncThunk<IRefreshAuthData, string>(
   'auth/refreshAuthToken',

   async (refreshToken, thunkApi) => {
      const { data, status } = await axios.post(
         'http://localhost:3001/refresh',
         {
            refreshToken,
         }
      );

      if (status === 400) return thunkApi.rejectWithValue(null);

      return data as IRefreshAuthData;
   }
);
