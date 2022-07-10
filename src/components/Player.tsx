import React from 'react';

import SpotifyWebPlayer from 'react-spotify-web-playback';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { playerActions } from '../store/player-slice';

const Player: React.FC = () => {
   const dispatch = useAppDispatch();
   const accessToken = useAppSelector((store) => store.auth.accessToken);
   const tracksUris = useAppSelector((store) => store.player.tracksUris);

   const selectedTrackUri = useAppSelector(
      (store) => store.player.selectedTrackUri
   );

   const index = tracksUris.indexOf(selectedTrackUri);

   return (
      <SpotifyWebPlayer
         token={accessToken}
         uris={selectedTrackUri ? tracksUris : []}
         offset={index}
         callback={(state) => {
            if (state.track.uri !== selectedTrackUri) {
               // 502 error
               dispatch(playerActions.selectTrack(state.track.uri));
            }
         }}
         autoPlay={true}
         styles={{
            activeColor: '#fff',
            bgColor: '#333',
            color: '#fff',
            loaderColor: '#fff',
            sliderColor: '#1cb954',
            sliderHandleColor: '#000',
            trackArtistColor: '#ccc',
            trackNameColor: '#fff',
            height: '70px',
         }}
      />
   );
};

export default React.memo(Player);
