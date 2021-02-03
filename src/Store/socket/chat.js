import socketIO from './socket';
import store from '../store';
import {addMessage} from '../entities/messages';
import {addOrUpdateChatThread} from '../entities/chatThreads';
// import {showLocalNotification} from '../../manager/NotificationManager';
import {AppState} from 'react-native';

export const configureChat = (socket) => {
  socket.onmessage((e) => {
    const storeState = store.getState();
    const {isChatting, thread} = storeState.ui.chat;

    const data = JSON.parse(e.data);
    const {rId, message} = data;

    const updateThread = {
      _id: rId,
      message: message,
    };

      store.dispatch(addMessage(updateThread))
      
    // store.dispatch(addOrUpdateChatThread(updateThread));

    // const isAppActive = AppState.currentState === 'active' ? true : false;

    // console.log('MESSAGE RECEIVED', data);
    // console.log(
    //   `${thread._id} === ${chatMessage.thread}`,
    //   thread._id === chatMessage.thread,
    // );
    // if (isAppActive && thread._id === chatMessage.thread && isChatting) {
    //   store.dispatch(addMessage(updateThread));
    // }
    // else {
    //   showLocalNotification({
    //     title: senderData.name,
    //     image: senderData.image,
    //     body: chatMessage.text,
    //     id: senderData._id,
    //     data: {
    //       type: 'chat_message',
    //       threadId: senderData._id,
    //       threadName: senderData.name,
    //       isPrivate: true,
    //     },
    //   });
    // }
  });
};

export const sendChatMessage = ({
 body,
  onSuccess,
  onError,
}) => {
  return (dispatch, getState) => {
    try {
    //   const store = getState();
    //   const {chat} = store.ui;
    //   const socket = socketIO.getSocket();

    //   message.thread = chat.thread._id;
    //   socket.emit('send_chat_message', message);

        const res = await http.post('')
      if (addToList) dispatch(addMessage(message));

      const updateThread = {
        ...chat.thread,
        lastMessage: message,
        createdAt: Date.now(),
        isPrivate: true,
      };
      dispatch(addOrUpdateChatThread(updateThread));
      //onSuccess event firing
      if (onSuccess) onSuccess();
    } catch (err) {
      //onError event firing
      if (onError) onError(err);
      else handleErrors(err);
    } finally {
    }
    const socket = socketIO.getSocket();
  };
};
/////////////
// 0: {_id: "5e9b116ffe931e3cd6afdf3d", createdBy: "5e9b020efe931e3cd6afdf2a", lastMessage: {…}, isDeleted: false, isPrivate: true, …}
// 1:
