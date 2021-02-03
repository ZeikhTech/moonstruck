import {createSlice} from '@reduxjs/toolkit';
import user from '../auth/user';

const initialState = {
  filter: '',
  list: [
    {
      age: '',
      birth_date: '',
      blurb: null,
      code: '',
      distance_range: '',
      email: '',
      files: [
        {
          id: '19',
          user_id: '66',
          file_path: 'image1 string',
          type: '1',
        },
      ],
      first_name: '',
      gender: '',
      id: '',
      is_man: '',
      is_woman: '',
      last_name: '',
      lower_age: '',
      man: '',
      max_age: '',
      middle_name: null,
      password: '',
      push_notification: '0',
      search_worldwide: '0',
      uName: '',
      verified: null,
      woman: '',
      zip_code: '',
      zodiac_sign: '',
      life_path: '',
      destiny: '',
      personality: '',
      heart_desire: '',
    },
  ],
  loading: false,
  cachedAt: null,
  loadingMore: false,
  refreshing: false,
};

const slice = createSlice({
  name: 'myFeed',
  initialState,
  reducers: {
    loadingFeed: (state, action) => {
      state.loading = action.payload;
    },
    setFeed: (state, action) => {
      state.list = action.payload;
      state.cachedAt = Date.now();
    },
    setFeedFilter: (state, action) => {
      state.filter = action.payload;
    },

    removeUser: (state, action) => {
      const index = state.list.findIndex((user) => user.id === action.payload);
      if (index !== -1) state.list.splice(index, 1);
      // state.list.filter((user) => user.id !== action.payload);
    },

    resetFeed: (state, action) => {
      state = initialState;
    },
  },
});

export const {
  loadingFeed,
  refreshFeed,
  likeFeedPost,
  setFeedFilter,
  setFeed,
  removeUser,
  resetFeed,
  loadingMoreFeed,
} = slice.actions;
export default slice.reducer;
