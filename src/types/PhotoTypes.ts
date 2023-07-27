export const FETCH_UNSPLASH_IMAGES = "FETCH_UNSPLASH_IMAGES";
export const FETCH_UNSPLASH_IMAGES_SUCCESS = "FETCH_UNSPLASH_IMAGES_SUCCESS";
export const FETCH_UNSPLASH_IMAGES_FAILURE = "FETCH_UNSPLASH_IMAGES_FAILURE";

export const SEARCH_UNSPLASH_IMAGES = "SEARCH_UNSPLASH_IMAGES";
export const SEARCH_UNSPLASH_IMAGES_SUCCESS = "SEARCH_UNSPLASH_IMAGES_SUCCESS";
export const SEARCH_UNSPLASH_IMAGES_FAILURE = "SEARCH_UNSPLASH_IMAGES_FAILURE";

export type UnsplashState = {
  readonly fetching: boolean;
  readonly errorMessage: string;
  readonly images?: readonly UnsplashImages[];
  readonly searchTerm: string;
  readonly pageNumber: number | null;
  readonly selectedImage?: UnsplashImages;
};

export type UnsplashImages = {
  readonly id: string;
  readonly description: string;
  readonly url: string;
  readonly likes: number;
  readonly userId: string;
  readonly username: string;
  readonly userFullName: string;
  readonly createdAt: number;
};

export type FetchUnsplashImages = {
  readonly type: typeof FETCH_UNSPLASH_IMAGES;
  readonly payload: {
    readonly pageNumber?: number;
  };
};

export type FetchUnsplashImagesSuccess = {
  readonly type: typeof FETCH_UNSPLASH_IMAGES_SUCCESS;
  readonly payload: {
    readonly unsplashFetchResult: readonly UnsplashImages[];
  };
};

export type FetchUnsplashImagesFailure = {
  readonly type: typeof FETCH_UNSPLASH_IMAGES_FAILURE;
  readonly payload: {
    readonly errorMessage: string;
  };
};

export type SearchUnsplashImages = {
  readonly type: typeof SEARCH_UNSPLASH_IMAGES;
  readonly payload: {
    readonly term: string;
    readonly searchTags: readonly string[];
    readonly pageNumber?: number;
  };
};

export type SearchUnsplashImagesSuccess = {
  readonly type: typeof SEARCH_UNSPLASH_IMAGES_SUCCESS;
  readonly payload: {
    readonly unsplashSearchResult: readonly UnsplashImages[];
  };
};

export type SearchUnsplashImagesFailure = {
  readonly type: typeof SEARCH_UNSPLASH_IMAGES_FAILURE;
  readonly payload: {
    readonly errorMessage: string;
  };
};

export type UnsplashAction =
  | FetchUnsplashImages
  | FetchUnsplashImagesSuccess
  | FetchUnsplashImagesFailure
  | SearchUnsplashImages
  | SearchUnsplashImagesSuccess
  | SearchUnsplashImagesFailure;

export type UnsplashImageData = {
  readonly results: readonly UnsplashImages[];
};

export type UnsplashSearchData = {
  readonly results: readonly UnsplashImages[];
  readonly total: number;
  readonly total_page: number;
};
