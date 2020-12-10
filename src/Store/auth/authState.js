import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

const slice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {setToken, resetToken} = slice.actions;
export default slice.reducer;
