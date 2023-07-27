import { all } from "typed-redux-saga";
import { UnsplashRootSaga } from "./unsplashSaga";

export default function* rootSaga() {
  yield* all([UnsplashRootSaga()]);
}
