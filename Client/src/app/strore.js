import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const userPersistConfig = {
  key: "user",
  storage,
};
const persistedUserReducer = persistReducer(userPersistConfig, userSlice);
export const store=configureStore({

    reducer:{
        user:persistedUserReducer

    }
})

export const persistor = persistStore(store);