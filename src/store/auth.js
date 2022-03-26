import { createSlice } from "@reduxjs/toolkit";

const initialUserAuthState = { isAuthenticated: false };

const userAuthSlice = createSlice({
    name: 'userAuthentication',
    initialState: initialUserAuthState,
    reducers:  {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

export const userAuthActions = userAuthSlice.actions;
export default userAuthSlice;