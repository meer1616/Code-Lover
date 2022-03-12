import { configureStore } from "@reduxjs/toolkit";
import kontestReducer from "../kontestSlice"

export const store = configureStore({
    reducer: {
        kontest: kontestReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
