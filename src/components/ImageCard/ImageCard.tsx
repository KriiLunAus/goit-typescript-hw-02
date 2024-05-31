import css from "./ImageCard.module.css";

const ImageCard = ({ onModal, urls, alt_description, likes, user, id }: ImageCardProps) => {
  return (
    <div className={css.element}>
      <img onClick={() => onModal(id)} src={urls.small} alt={alt_description} />
      <p>Author: {user.name}</p>
      <p>Likes: {likes}</p>
    </div>
  );
};

export default ImageCard;
