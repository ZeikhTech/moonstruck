import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: {
    _id: '',
    name: '',
    username: '',
    gender: '',
    image: '',
  },
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
  },
});

export const {setUser} = slice.actions;
export default slice.reducer;
