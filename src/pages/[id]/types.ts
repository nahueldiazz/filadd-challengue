interface ArtistType {
    external_urls: {
        spotify: string
    },
    href: string,
    id: string,
    name: string,
    type: string,
    uri: string,

}

interface ImagesType {
        height: number,
        url: string
        width: number
}

interface ItemTrackType {
    artists: [
        {
            name: string,
        }
    ],
    name: string,
}

export interface TracksTypes{
    items: ItemTrackType[];
}

interface IdResponseTypes{
    name:string;
    artists: ArtistType[];
    images: ImagesType[];
    tracks: TracksTypes;

}

export interface IdAlbumTypes{
    idResponse: IdResponseTypes
}