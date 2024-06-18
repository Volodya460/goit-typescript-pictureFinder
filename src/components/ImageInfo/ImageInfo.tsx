import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Loader } from "../Loader/Loader";
import { Image, Respons, api } from "../../ApiSearch/Api";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { FC, useEffect, useState } from "react";

type StatusValue = "idle" | "pending" | "resolved" | "rejected";

interface Status {
  IDLE: StatusValue;
  PENDING: StatusValue;
  RESOLVED: StatusValue;
  REJECTED: StatusValue;
}

const Status: Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

interface ImageInfoProps {
  searchValue: string;
  page: number;
  changePage(): void;
}

export const ImageInfo: FC<ImageInfoProps> = ({
  searchValue,
  page,
  changePage,
}) => {
  const [images, setImages] = useState<Image[]>([]);
  const [largePicture, setLargePicture] = useState<string>("");
  const [totalHits, setTotalHits] = useState<number>(0);

  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string>(Status.IDLE);

  useEffect(() => {
    if (!searchValue) {
      return;
    }
    if (page === 1) {
      setImages([]);
      setTotalHits(0);
      setError(null);
      setStatus(Status.IDLE);
    }

    setStatus(Status.PENDING);

    api(searchValue, page)
      .then((respons: Respons) => {
        if (respons.totalHits === 0) {
          setStatus(Status.IDLE);
          return alert(`We dont find ${searchValue}`);
        }
        setImages((prev) => [...prev, ...respons.hits]);
        setStatus(Status.RESOLVED);
        setTotalHits(respons.totalHits);
      })
      .catch((error) => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [page, searchValue]);

  const loadMore = () => {
    changePage();
  };

  const openModal = (largePicture: string) => {
    setLargePicture(largePicture);
  };

  const closeModale = () => {
    setLargePicture("");
  };

  if (largePicture) {
    return <Modal largePicture={largePicture} closeModale={closeModale} />;
  }
  if (status === "pending") {
    return <Loader />;
  }
  if (status === "resolved") {
    return (
      <>
        <ImageGallery arr={images} openModal={openModal} />
        {images.length < totalHits && <Button loadMore={loadMore} />}
      </>
    );
  }
  if (status === "rejected") {
    return <p>{error}</p>;
  }
};
