import { ChangeEvent, FormEvent, useState } from "react";
import css from "./SearrchBar.module.css";
import { FC } from "react";

interface SearchbarProps {
  handleFormSubmit(searchValue: string): void;
}

export const Searchbar: FC<SearchbarProps> = ({ handleFormSubmit }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value.toLowerCase());
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (value.trim() === "") {
      return alert("Please write something");
    }
    handleFormSubmit(value);
    setValue("");
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          Search
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};
