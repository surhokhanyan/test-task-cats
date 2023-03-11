import {configureStore} from "@reduxjs/toolkit";
import CategoriesSlice from "./slices/categoriesSlice";
import CatsSlice from "./slices/catsSlice";

const store = configureStore({
    reducer: {
        categories: CategoriesSlice,
        cats: CatsSlice
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch