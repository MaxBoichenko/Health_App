import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  axiosLogin,
  axiosLogout,
  axiosRegister,
  axiosRefresh,
} from 'services/auth';
import { axiosGetUser } from 'services/user';

import { createSlice } from '@reduxjs/toolkit';

const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const { email, password } = userData;
      const data = await axiosRegister(userData);
      dispatch(
        login({
          email,
          password,
        })
      );
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosLogin(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        auth: { accessToken },
      } = getState();
      const data = await axiosLogout(accessToken);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

const getUser = createAsyncThunk(
  'auth/get/user',
  async (accessToken, { rejectWithValue }) => {
    try {
      const data = await axiosGetUser(accessToken);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

const refresh = createAsyncThunk(
  'auth/refresh',
  async (sid, { rejectWithValue, getState, dispatch }) => {
    try {
      const {
        auth: { refreshToken },
      } = getState();
      const data = await axiosRefresh(sid, refreshToken);
      const { newAccessToken } = data;
      dispatch(getUser(newAccessToken));
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.sid) {
        return false;
      }
    },
  }
);

const initialState = {
  user: {},
  todaySummary: {},
  sid: '',
  accessToken: '',
  refreshToken: '',
  isLogin: false,
  loading: false,
  isRefreshing: false,
  error: null,
  newUser: {},
};

const accessAuth = (store, payload) => {
  store.loading = false;
  store.isLogin = true;
  store.user = payload.user;
  store.sid = payload.sid;
  store.accessToken = payload.accessToken;
  store.refreshToken = payload.refreshToken;
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearNewUser: store => {
      store.newUser = {};
    },
  },

  extraReducers: {
    // * REGISTER

    [register.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [register.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.isLogin = false;
      store.newUser = payload;
      store.user = { ...store.user };
      store.sid = '';
      store.accessToken = '';
      store.refreshToken = '';
    },

    [register.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload.data.message;
    },

    // * LOGIN

    [login.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [login.fulfilled]: (store, { payload }) => accessAuth(store, payload),

    [login.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload.data.message;
    },

    // * LOGOUT

    [logout.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logout.fulfilled]: () => ({ ...initialState }),
    [logout.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    // * REFRESH

    [refresh.pending]: store => {
      store.loading = true;
      store.error = null;
      store.isRefreshing = true;
    },

    [refresh.fulfilled]: (store, { payload }) => {
      store.isLogin = true;
      store.loading = false;
      store.sid = payload.sid;
      store.accessToken = payload.newAccessToken;
      store.refreshToken = payload.newRefreshToken;
      store.isRefreshing = false;
    },

    [refresh.rejected]: (store, { payload }) => ({
      ...initialState,
      error: payload,
    }),

    // * GET USER

    [getUser.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [getUser.fulfilled]: (store, { payload }) => {
      store.isLogin = true;
      store.loading = false;
      store.user = payload;
    },

    [getUser.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default auth.reducer;
export const { clearNewUser } = auth.actions;
