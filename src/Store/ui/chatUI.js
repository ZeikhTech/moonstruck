import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isChatting: false,
  chatTitle: '',
  members: {},
  thread: {
    members: [],
  },
  loading: false,
};

const slice = createSlice({
  name: 'chatUI',
  initialState,
  reducers: {
    loadingChat: (state, action) => {
      state.loading = action.payload;
    },
    setIsChatting: (state, action) => {
      state.isChatting = action.payload;
    },
    setChatTitle: (state, action) => {
      state.chatTitle = action.payload;
    },
    setChatThread: (state, action) => {
      state.thread = action.payload;
    },
    setChatMembers: (state, action) => {
      state.members = action.payload;
    },
  },
});

export const {
  loadingChat,
  setIsChatting,
  setChatTitle,
  setChatThread,
  setChatMembers,
} = slice.actions;
export default slice.reducer;
