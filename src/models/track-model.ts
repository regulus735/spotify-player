export default interface ITrack {
   uri: string;
   name: string;
   artists: [
      {
         name: string;
      }
   ];
   album: {
      images: [
         {
            height: number;
            url: string;
            width: number;
         }
      ];
   };
   duration_ms: string;
}
