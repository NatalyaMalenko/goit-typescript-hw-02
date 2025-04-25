import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Photo } from "../../types";

interface ImageGalleryProps {
  photos: Photo[];
  onImageClick: (photo: Photo) => void;
}

export default function ImageGallery({
  photos,
  onImageClick,
}: ImageGalleryProps) {
  return (
    <ul className={css.gallery}>
      {photos.map((photo: Photo) => (
        <li key={photo.id} className={css.galleryCard}>
          <ImageCard photo={photo} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
