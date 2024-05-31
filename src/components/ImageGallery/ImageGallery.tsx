import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"



const ImageGallery = ({ photos , onModal }: ImageGaleryProps) => {
    
    return (
        <div className={css.listWrapper}>
        <ul className={css.photoList}>
                {
                    photos.map(({ id, urls, alt_description, likes, user }: Photo) => {
                    return (
                        
                    <li key={id}>
                        <ImageCard onModal={onModal} urls = {urls} alt_description = {alt_description} user={user} id={id}  likes = {likes} />
                    </li>
            )
                })}
              
        </ul>
        </div>
    )
}

export default ImageGallery;