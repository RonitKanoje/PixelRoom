import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import collectionReducer from "./features/collectionSlice";
import toasterReducer from "./features/toasterSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    collection: collectionReducer,
    toaster: toasterReducer,
  },
});
