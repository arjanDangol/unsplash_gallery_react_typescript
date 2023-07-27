import { put, call, all, takeLatest } from "typed-redux-saga";
import {
  FetchUnsplashImages,
  FETCH_UNSPLASH_IMAGES,
  FETCH_UNSPLASH_IMAGES_SUCCESS,
  FETCH_UNSPLASH_IMAGES_FAILURE,
  SEARCH_UNSPLASH_IMAGES,
  SEARCH_UNSPLASH_IMAGES_SUCCESS,
  SEARCH_UNSPLASH_IMAGES_FAILURE,
  SearchUnsplashImages,
} from "../../types/PhotoTypes";
import {
  FetchUnsplashAssets,
  SearchUnsplashAssets,
} from "../services/unsplashService";

export function* fetchUnsplashImages({
  payload,
}: FetchUnsplashImages): unknown {
  const page = payload.pageNumber;
  try {
    const fetchPhotosResult = yield* call(FetchUnsplashAssets, {
      page,
    });

    yield* put({
      type: FETCH_UNSPLASH_IMAGES_SUCCESS,
      payload: {
        unsplashFetchResult: fetchPhotosResult,
      },
    });
  } catch (e: unknown) {
    yield* put({
      type: FETCH_UNSPLASH_IMAGES_FAILURE,
      payload: { errorMessage: "Unexpected error when fetching images" },
    });
  }
}

export function* searchUnsplashImages({
  payload,
}: SearchUnsplashImages): unknown {
  const term = payload.term;
  const page = payload.pageNumber;
  try {
    const searchPhotosResult = yield* call(SearchUnsplashAssets, {
      term,
      page,
    });

    yield* put({
      type: SEARCH_UNSPLASH_IMAGES_SUCCESS,
      payload: {
        unsplashSearchResult: searchPhotosResult,
      },
    });
  } catch (e: unknown) {
    yield* put({
      type: SEARCH_UNSPLASH_IMAGES_FAILURE,
      payload: { errorMessage: "Unexpected error when searching images" },
    });
  }
}

export function* UnsplashRootSaga(): unknown {
  yield* all([
    takeLatest(FETCH_UNSPLASH_IMAGES, fetchUnsplashImages),
    takeLatest(SEARCH_UNSPLASH_IMAGES, searchUnsplashImages),
  ]);
}
