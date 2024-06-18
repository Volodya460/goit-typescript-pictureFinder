import axios from "axios";
const API_KEY = "33272220-12aa76911a3763f30e85ef70a";
const BASE_URL = `https://pixabay.com/api/`;

interface SearchParams {
  key: string;
  image_type: string;
  orientation: string;
  per_page: number;
}
export interface Image {
  collections: number;
  comments: number;
  downloads: number;
  id: number;
  imageHeight: number;
  imageSize: number;
  imageWidth: number;
  largeImageURL: string;
  likes: number;
  pageURL: string;
  previewHeight: number;
  previewURL: string;
  previewWidth: number;
  tags: string;
  type: string;
  user: string;
  userImageURL: string;
  user_id: number;
  views: number;
  webformatHeight: number;
  webformatURL: string;
  webformatWidth: number;
}

export interface Respons {
  total: number;
  totalHits: number;
  hits: [Image];
}

const searchParams: SearchParams = {
  key: API_KEY,
  image_type: "photo",
  orientation: "horizontal",
  per_page: 12,
};

const urlSearchParams = new URLSearchParams({
  key: searchParams.key,
  image_type: searchParams.image_type,
  orientation: searchParams.orientation,
  per_page: searchParams.per_page.toString(), // URLSearchParams требует строки
});

export async function api(value: string, page: number): Promise<Respons> {
  const response = await axios(
    `${BASE_URL}?${urlSearchParams}&q=${value}&page=${page}`
  );
  console.log(response.data);
  return response.data;
}
