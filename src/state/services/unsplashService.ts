import axios, { AxiosResponse } from "axios";
import { UnsplashSearchData, UnsplashImages } from "../../types/PhotoTypes";
// import { parseData } from "../../utils/parsedData";

const CLIENT_ID = `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`;

export const UnsplashBaseURL = "https://api.unsplash.com";

type FetchUnsplashParams = {
  readonly page?: number;
};

type SearchUnsplashParams = {
  readonly term: string;
  readonly page?: number;
};

export type UpsplashAssetResult = {
  readonly unsplashImages: readonly UnsplashImages[];
  readonly page: number;
};

const defaultSearchResultSize = 10;

export const FetchUnsplashAssets = async ({
  page,
}: FetchUnsplashParams): Promise<UpsplashAssetResult> => {
  return await axios
    .get(`${UnsplashBaseURL}/photos/`, {
      params: {
        page: page,
        per_page: defaultSearchResultSize,
      },
      headers: {
        Authorization: CLIENT_ID,
      },
    })
    .then((response: AxiosResponse<UnsplashSearchData>) => {
      if (response.status === 200) {
        return {
          unsplashImages: response.data.results,
          page: response.data.total,
        };
      }
      throw new Error("Error search assets");
    });
};

export const SearchUnsplashAssets = async ({
  term,
  page,
}: SearchUnsplashParams): Promise<UpsplashAssetResult> => {
  return await axios
    .get(`${UnsplashBaseURL}/search/photos/`, {
      params: {
        query: term,
        page: page,
        per_page: defaultSearchResultSize,
      },
      headers: {
        Authorization: CLIENT_ID,
      },
    })
    .then((response: AxiosResponse<UnsplashSearchData>) => {
      if (response.status === 200) {
        return {
          unsplashImages: response.data.results,
          page: response.data.total,
        };
      }
      throw new Error("Error search assets");
    });
};
