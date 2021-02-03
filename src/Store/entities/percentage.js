import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: [{percent: 0}, {percent: 0}, {percent: 0}, {percent: 0}],
};

const slice = createSlice({
  name: 'percentage',
  initialState,
  reducers: {
    loadingPercentage: (state, action) => {
      state.loading = action.payload;
    },
    setPercentage: (state, action) => {
      state.data = action.payload;
    },
    resetPercentage: (state, action) => {
      state = initialState;
    },
  },
});

export const {
  loadingPercentage,
  setPercentage,
  resetPercentage,
} = slice.actions;
export default slice.reducer;
