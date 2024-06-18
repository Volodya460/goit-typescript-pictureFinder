import { FC } from "react";
import css from "./ImageGalleryItem.module.css";

interface ImageGalleryItemProps {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
  openModal(): void;
}

export const ImageGalleryItem: FC<ImageGalleryItemProps> = ({
  id,
  webformatURL,

  tags,
  openModal,
}) => {
  return (
    <li className={css.ImageGalleryItem} key={id}>
      <img
        src={webformatURL}
        alt={tags}
        className={css.ImageGalleryItem_image}
        onClick={openModal}
      />
    </li>
  );
};
