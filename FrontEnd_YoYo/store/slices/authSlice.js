import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    memberId: -1,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            state.token = action.payload.token;
            state.memberId = action.payload.memberId;
            state.isAuthenticated = true;

            AsyncStorage.setItem("token", action.payload.token);
            AsyncStorage.setItem(
                "memberId",
                action.payload.memberId.toString()
            );
        },
        logout(state) {
            state.token = "";
            state.memberId = -1;
            state.isAuthenticated = false;

            AsyncStorage.removeItem("token");
            AsyncStorage.removeItem("memberId");
        },
        setStoredAuth(state, action) {
            state.token = action.payload.token;
            state.memberId = action.payload.memberId;
            state.isAuthenticated = !!action.payload.token;
        },
    },
});
export const { login, logout, setStoredAuth } = authSlice.actions;

export default authSlice.reducer;
