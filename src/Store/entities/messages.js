import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  threadId: '',
  list: [],
  loading: false,
  cachedAt: null,
  pageNum: 0,
  hasMore: false,
  loadingMore: false,
};

const slice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setThread: (state, action) => {
      state.threadId = action.payload;
    },
    loadingMessages: (state, action) => {
      state.loading = action.payload;
    },
    addMessage: (state, action) => {
      state.list.unshift(action.payload);
    },
    setMessages: (state, action) => {
      state.list = action.payload;
    },
    setMoreMessages: (state, action) => {
      state.list.push(action.payload);
    },
    loadingMoreMessages: (state, action) => {
      state.loadingMore = action.payload;
    },
    resetMessages: (state, action) => {
      state = initialState;
    },
  },
});

export const {
  loadingMessages,
  addMessage,
  setMessages,
  setMoreMessages,
  resetMessages,
  setThread,
  loadingMoreMessages,
} = slice.actions;
export default slice.reducer;
