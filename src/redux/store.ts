import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import authSlice from "./features/authSlice";
const store = configureStore({
    reducer: {
        authSlice,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
