import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: {},
  loading: false,
  cachedAt: null,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadingUser: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.data = action.payload;
    },
    updateUser: (state, action) => {
      state.data = action.payload;
      state.cachedAt = Date.now();
    },
    resetUser: (state, action) => {
      state = initialState;
    },
  },
});

export const {loadingUser, setUser, updateUser, resetUser} = slice.actions;
export default slice.reducer;
