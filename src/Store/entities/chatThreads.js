import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  list: [],
  hasMore: false,
  pagNum: 0,
  loading: false,
  cachedAt: null,
  loadingMore: false,
};

const slice = createSlice({
  name: 'ChatThreads',
  initialState,
  reducers: {
    loadingThreads: (state, action) => {
      state.loading = action.payload;
    },
    setThread: (state, action) => {
      const {list = [], hasMore = true, pagNum = 1} = action.payload;
      state.list = list;
      state.hasMore = hasMore;
      state.pagNum = pagNum;
      state.cachedAt = Date.now();
    },
    loadingMoreThread: (state, action) => {
      state.loadingMore = action.payload;
    },
    addOrUpdateChatThread: (state, action) => {
      const thread = action.payload;
      const index = state.list.findIndex((t) => t._id === thread._id);
      if (index !== -1) {
        state.list.splice(index, 1);
      }
      state.list.unshift(thread);
    },
  },
});

export const {
  loadingThreads,
  setThread,
  loadingMoreThread,
  addOrUpdateChatThread,
} = slice.actions;
export default slice.reducer;
