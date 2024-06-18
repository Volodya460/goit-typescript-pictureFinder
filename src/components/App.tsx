import { useState } from "react";
import { Searchbar } from "./Searchbar/Searchbar";

import { ImageInfo } from "./ImageInfo/ImageInfo";

export function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const handleFormSubmit = (searchValue: string) => {
    setSearchValue(searchValue);
    setPage(1);
  };

  const changePage = () => {
    setPage((prev) => (prev += 1));
  };

  return (
    <>
      <Searchbar handleFormSubmit={handleFormSubmit} />
      <ImageInfo
        searchValue={searchValue}
        page={page}
        changePage={changePage}
      />
    </>
  );
}
