import {
  FETCH_UNSPLASH_IMAGES,
  FETCH_UNSPLASH_IMAGES_SUCCESS,
  FETCH_UNSPLASH_IMAGES_FAILURE,
  FetchUnsplashImages,
  FetchUnsplashImagesSuccess,
  FetchUnsplashImagesFailure,
  SEARCH_UNSPLASH_IMAGES,
  SEARCH_UNSPLASH_IMAGES_SUCCESS,
  SEARCH_UNSPLASH_IMAGES_FAILURE,
  SearchUnsplashImages,
  SearchUnsplashImagesSuccess,
  SearchUnsplashImagesFailure,
} from "../../types/PhotoTypes";

export const fetchUnsplashAction = (
  pageNumber?: number
): FetchUnsplashImages => ({
  type: FETCH_UNSPLASH_IMAGES,
  payload: {
    pageNumber,
  },
});

export const fetchUnsplashSuccessAction = (
  unsplashFetchResult: readonly []
): FetchUnsplashImagesSuccess => ({
  type: FETCH_UNSPLASH_IMAGES_SUCCESS,
  payload: { unsplashFetchResult },
});

export const fetchUnsplashFailureAction = (
  errorMessage: string
): FetchUnsplashImagesFailure => ({
  type: FETCH_UNSPLASH_IMAGES_FAILURE,
  payload: {
    errorMessage,
  },
});

export const searchUnsplashAction = (
  term: string,
  searchTags: readonly string[],
  pageNumber?: number
): SearchUnsplashImages => ({
  type: SEARCH_UNSPLASH_IMAGES,
  payload: {
    term,
    searchTags,
    pageNumber,
  },
});

export const searchUnsplashSuccessAction = (
  unsplashSearchResult: readonly []
): SearchUnsplashImagesSuccess => ({
  type: SEARCH_UNSPLASH_IMAGES_SUCCESS,
  payload: { unsplashSearchResult },
});

export const searchUnsplashFailureAction = (
  errorMessage: string
): SearchUnsplashImagesFailure => ({
  type: SEARCH_UNSPLASH_IMAGES_FAILURE,
  payload: {
    errorMessage,
  },
});
