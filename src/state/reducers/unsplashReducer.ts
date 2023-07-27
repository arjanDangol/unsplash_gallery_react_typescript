import {
  FETCH_UNSPLASH_IMAGES,
  FETCH_UNSPLASH_IMAGES_SUCCESS,
  FETCH_UNSPLASH_IMAGES_FAILURE,
  SEARCH_UNSPLASH_IMAGES,
  SEARCH_UNSPLASH_IMAGES_SUCCESS,
  SEARCH_UNSPLASH_IMAGES_FAILURE,
  UnsplashAction,
} from "../../types/PhotoTypes";
import { UnsplashState } from "../../types/PhotoTypes";

const initialState: UnsplashState = {
  pageNumber: 1,
  fetching: false,
  errorMessage: "",
  images: [],
  searchTerm: "",
  selectedImage: {
    id: "",
    description: "",
    url: "",
    likes: 0,
    userId: "",
    username: "",
    userFullName: "",
    createdAt: 0,
  },
};

const unsplashReducer = (
  state: UnsplashState = initialState,
  action: UnsplashAction
): UnsplashState => {
  switch (action.type) {
    case FETCH_UNSPLASH_IMAGES:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_UNSPLASH_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload.unsplashFetchResult,
        fetching: false,
      };
    case FETCH_UNSPLASH_IMAGES_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        fetching: false,
      };
    case SEARCH_UNSPLASH_IMAGES:
      return {
        ...state,
        fetching: true,
      };
    case SEARCH_UNSPLASH_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload.unsplashSearchResult,
        fetching: false,
      };
    case SEARCH_UNSPLASH_IMAGES_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        fetching: false,
      };
    default:
      return state;
  }
};

export default unsplashReducer;
