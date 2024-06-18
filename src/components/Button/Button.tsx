import { FC } from "react";
import css from "./Button.module.css";
interface ButtonProps {
  loadMore(): void;
}
export const Button: FC<ButtonProps> = ({ loadMore }) => {
  return (
    <button type="button" className={css.Button} onClick={loadMore}>
      Load more
    </button>
  );
};
