import { fetchAuthToken, refreshAuthToken } from './auth-actions';
import { createSlice } from '@reduxjs/toolkit';

interface IAuthState {
   accessToken: string;
   refreshToken: string;
   expiresIn: number;
}

const initialState: IAuthState = {
   accessToken: '',
   refreshToken: '',
   expiresIn: 0,
};

const win: Window = window;

const authSlice = createSlice({
   name: 'authentication',
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder.addCase(fetchAuthToken.fulfilled, (state, { payload }) => {
         localStorage.setItem('spotifyToken', payload.accessToken);

         window.history.pushState({}, '', '/');
         return { ...payload };
      });
      builder.addCase(fetchAuthToken.rejected, () => {
         win.location = '/';
      });

      builder.addCase(refreshAuthToken.fulfilled, (state, { payload }) => {
         return { ...state, ...payload };
      });
      builder.addCase(refreshAuthToken.rejected, () => {
         win.location = '/';
      });
   },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
