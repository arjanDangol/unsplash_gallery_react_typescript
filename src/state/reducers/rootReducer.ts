import { combineReducers } from "redux";
import unsplashReducer from "./unsplashReducer";

const rootReducer = combineReducers({
  unsplash: unsplashReducer,
});

export default rootReducer;
