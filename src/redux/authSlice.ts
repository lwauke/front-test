import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface AuthState {
  token: string | null;
  username: string | null;
  rememberCredentials: boolean;
}

const initialState: AuthState = {
  token: localStorage.getItem("token") || sessionStorage.getItem("token"),
  username: localStorage.getItem("username") || sessionStorage.getItem("username"),
  rememberCredentials: !!localStorage.getItem("token")?.length,
};

const storeCredentials = ({ token, username, rememberCredentials }: AuthState) => {
  if (!token || !username) {
    throw new Error('Token and username are required');
  }
  if (rememberCredentials) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    return;
  }
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('username', username);
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
      storeCredentials(action.payload);
    },
    logout: (state) => {
      state.token = null;
      state.username = null;
      localStorage.clear();
      sessionStorage.clear();
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
