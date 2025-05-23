import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import categorySlice from "../features/category/categorySlice";
import todoSlice from "../features/todo/todoSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const userPersistConfig = {
  key: "user",
  storage,
};



const categoryPersistConfig = {
  key: "category",
  storage,
};

const todoPersistConfig = {
  key: "todo",
  storage,
};

const persistedUserReducer = persistReducer(userPersistConfig, userSlice);
const persistedCategoryReducer = persistReducer(categoryPersistConfig, categorySlice);
const persistedTodoReducer=persistReducer(todoPersistConfig,todoSlice)




export const store=configureStore({

    reducer:{
        user:persistedUserReducer,
        category:persistedCategoryReducer,
        todo:persistedTodoReducer

    }
})

export const persistor = persistStore(store);