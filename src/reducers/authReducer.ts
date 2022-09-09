import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authAPI, AuthResponse, IUser } from "../api/api";

export interface AuthState {
  currentUser: IUser;
  isLoading: boolean;
  error: boolean;
}

interface AuthData {
  email: string;
  password: string;
}

const initialState: AuthState = {
  currentUser: {} as IUser,
  isLoading: false,
  error: false,
};

export const login = createAsyncThunk<AuthResponse | undefined, AuthData>(
  "auth/login",
  async ({ email, password }: AuthData, thunkAPI) => {
    thunkAPI.dispatch(loginStart())
    try {
      const response = await authAPI.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
      thunkAPI.dispatch(loginSuccess())
      return response.data;
    } catch (error) {
      thunkAPI.dispatch(loginFailure())
      console.log(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
    },
    loginFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.currentUser = action.payload?.user!
    });
  }
});

export const { loginStart, loginFailure, loginSuccess } = authSlice.actions;

export default authSlice.reducer;
