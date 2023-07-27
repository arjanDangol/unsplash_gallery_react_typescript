import { Dispatch } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { UnsplashAction } from "../../types/PhotoTypes";

export const useAppDispatch = (): Dispatch<UnsplashAction> =>
  useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
