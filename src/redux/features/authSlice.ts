import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StorageKey } from "@/types/storage-key";
// import cookieCutter from "cookie-cutter";
// import { cookies } from "next/headers";
interface TokenState {
    accessToken: string | null;
}

const initialState: TokenState = {
    // accessToken: cookieCutter.get(StorageKey.ACCESS_TOKEN)
    //     ? cookieCutter.get(StorageKey.ACCESS_TOKEN)
    //     : null,
    accessToken: localStorage.getItem(StorageKey.ACCESS_TOKEN)
        ? localStorage.getItem(StorageKey.ACCESS_TOKEN)
        : null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<string>) => {
            const accessToken: string = action.payload;
            state.accessToken = accessToken;

            // const jwt = cookies().get(StorageKey.ACCESS_TOKEN)?.value;
            // console.log(jwt);
            localStorage.setItem(StorageKey.ACCESS_TOKEN, accessToken);
            // cookieCutter.set(StorageKey.ACCESS_TOKEN, accessToken, {
            //     expires: new Date(Date.now() + 30 * 60 * 1000),
            // });
        },
        logOut: (state) => {
            state.accessToken = null;
            localStorage.removeItem(StorageKey.ACCESS_TOKEN);
            // cookieCutter.set(StorageKey.ACCESS_TOKEN, "");
            // const jwt = cookies().get(StorageKey.ACCESS_TOKEN)?.value;
            // console.log(jwt);
        },
    },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
