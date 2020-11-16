import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: {
    name: '',
    username: '',
    image: '',
  },
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {setUser} = slice.actions;
export default slice.reducer;
