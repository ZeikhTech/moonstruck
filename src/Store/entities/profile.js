import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: {
    _id: '',
    name: '',
    age: null,
    image: '',
    country: '',
    bio: '',
  },
  cachedAt: null,
};

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    loadingProfile: (state, action) => {
      state.loading = action.payload;
    },
    setProfile: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {loadingProfile, setProfile} = slice.actions;
export default slice.reducer;
