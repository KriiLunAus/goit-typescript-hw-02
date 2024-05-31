type ImageModalProps = {
    imgId: string,
    photos: Pick<Photo, 'id' | 'urls'>[],
    onClose: () => void,
    modalIsOpen: boolean,

}