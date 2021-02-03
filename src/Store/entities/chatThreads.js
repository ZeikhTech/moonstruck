import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  list: [
    {
      id: '1',
      uName: 'test',
      first_name: 'test',
      last_name: 'test',
      files: {file_path: 'test', type: '1'},
    },
  ],
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
    setThreads: (state, action) => {
      state.list = action.payload;
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
  setThreads,
  loadingMoreThread,
  addOrUpdateChatThread,
} = slice.actions;
export default slice.reducer;
