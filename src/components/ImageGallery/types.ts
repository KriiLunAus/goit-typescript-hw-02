type ImageGaleryProps = {
    photos: Photo[],
    onModal: (id:string) => void,
}

type Photo = Pick<Photos, 'id' | 'urls' | 'alt_description' | 'likes' | 'user'>