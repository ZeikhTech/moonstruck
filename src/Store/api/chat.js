import http from '../../Services/http';
import storage from '../../Services/storage';
import socketIO from '../socket/socket';
//entities
import {
  setThreads,
  loadingThreads,
  loadingMoreThreads,
} from '../entities/chatThreads';
import {
  setMessages,
  setThread,
  loadingMessages,
  addMessage,
  setMoreMessages,
} from '../entities/messages';
//UI
import {setChatMembers, setChatThread, loadingChat} from '../ui/chatUI';

//http path
const path = '/users';

export const loadChatThreads = ({onSuccess, onError}) => {
  return async (dispatch, getState) => {
    // const {auth} = getState();
    // const token = auth.state.token;
    // const user = auth.user.data;
    // const userId = user[0].id;

    const user = await storage.get('user');
    const token = await storage.get('xAuthToken');

    const data = new FormData();
    data.append('id', user[0].id);
    data.append('token', token);

    try {
      //   const store = getState();
      //   const {entities} = store;
      //   const {loading, cachedAt} = entities.chatThreads;
      //   if (loading) return;

      dispatch(loadingThreads(true));
      const res = await http.post(path + '/threads', data);
      const list = res.data;

      dispatch(setThreads(list));

      if (onSuccess) onSuccess(res);
    } catch (err) {
      if (onError) onError(err);
      console.log('chat error===========', err);
    } finally {
      dispatch(loadingThreads(false));
    }
  };
};

export const initializeChat = ({
  threadId,
  isPrivate = true,
  onSuccess,
  onError,
} = {}) => {
  return async (dispatch, getState) => {
    try {
      const store = getState();

      const xAuthToken = store.auth.state.token;
      dispatch(loadingChat(true));
      let res;
      if (isPrivate) {
        res = await http.post(
          path + '/get_or_create_private_thread',
          {userId: threadId},
          {'x-auth-token': xAuthToken},
        );
      } else {
        //group chat
      }
      const thread = res.data;
      dispatch(setChatThread(thread));

      const chatMembers = {};
      for (let i = 0; i < thread.members.length; i++) {
        let m = thread.members[i];
        chatMembers[m._id] = m;
      }
      dispatch(setChatMembers(chatMembers));
      //onSuccess event firing
      if (onSuccess) onSuccess(res);
    } catch (err) {
      //onError event firing
      if (onError) onError(err);
      else handleErrors(err);
    } finally {
      dispatch(loadingChat(false));
    }
  };
};

export const loadChatMessages = ({body, onSuccess, onError} = {}) => {
  return async (dispatch, getState) => {
    try {
      const store = getState();
      const {entities} = store;
      const loading = entities.messages.loading;

      if (loading) return;

      dispatch(loadingMessages(true));
      const res = await http.post('/chats', body);
      const list = res.data.chats;

      // dispatch(setThread(threadId));

      dispatch(setMessages(list));
      //onSuccess event firing
      if (onSuccess) onSuccess(res);
    } catch (err) {
      //onError event firing
      console.log('ERRR =>', err);
      if (onError) onError(err);
      console.log('ERR=======', err);
    } finally {
      dispatch(loadingMessages(false));
    }
  };
};

export const loadMoreChatMessages = ({body, onSuccess, onError} = {}) => {
  return async (dispatch, getState) => {
    try {
      const store = getState();
      const {entities} = store;
      const {list, loading} = entities.messages;

      if (loading) return;

      // dispatch(loadingMessages(true));
      const res = await http.post('/chats', body);

      if (!res.data.chats) return;
      else {
        const updatedList = [...list, ...res.data.chats];
        dispatch(setMessages(updatedList));
      }

      //onSuccess event firing
      if (onSuccess) onSuccess(res);
    } catch (err) {
      if (onError) onError(err);
      console.log('ERR=======', err);
    } finally {
      // dispatch(loadingMessages(false));
    }
  };
};

export const sendChatMessage = ({body, onSuccess, onError}) => {
  return async (dispatch, getState) => {
    try {
      const res = await http.post('/chats/store', body);

      dispatch(addMessage(res.data.chat));

      if (onSuccess) onSuccess(res);
    } catch (err) {
      if (onError) onError(err);
      console.log('ERR=======>', err);
    }
  };
};
