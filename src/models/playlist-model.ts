interface image {
   height: number;
   url: string;
   width: number;
}

export default interface IPlaylist {
   name: string;
   images: [image, image, image];
   id: string;
}
