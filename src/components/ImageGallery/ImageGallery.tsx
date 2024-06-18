import { FC } from "react";
import { Image } from "../../ApiSearch/Api";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  arr: Image[];
  openModal(largePicture: string): void;
}

export const ImageGallery: FC<ImageGalleryProps> = ({ arr, openModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {arr.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            openModal={() => {
              openModal(largeImageURL);
            }}
          />
        );
      })}
    </ul>
  );
};
