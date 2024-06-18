import { FC, useEffect } from "react";
import css from "./Modal.module.css";

interface ModalProps {
  largePicture: string;
  closeModale(): void;
}

export const Modal: FC<ModalProps> = ({ largePicture, closeModale }) => {
  useEffect(() => {
    const closeEscModal = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        closeModale();
      }
    };
    window.addEventListener("keydown", closeEscModal);
    return () => {
      window.removeEventListener("keydown", closeEscModal);
    };
  }, [closeModale]);

  const handleBackDropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      closeModale();
    }
  };

  return (
    <div className={css.Overlay} onClick={handleBackDropClick}>
      <div className={css.Modal}>
        <img src={largePicture} alt="" />
      </div>
    </div>
  );
};
