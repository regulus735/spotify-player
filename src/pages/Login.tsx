import React from 'react';
import './Login.sass';

const URL =
   'https://accounts.spotify.com/authorize?client_id=ca558bcd1da840a08d33b77e91180588&response_type=code&redirect_uri=https://regulus735.github.io/spotify-player/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

const Login: React.FC = () => {
   return (
      <main className="login-page">
         <h1>Spotify Playlists Player</h1>
         <a href={URL}>Log in</a>
      </main>
   );
};

export default Login;
