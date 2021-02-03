import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MessageBar from '../Components/Chat/MessageBar';
import Images from '../Constants/Images';
import Colors from '../Constants/Colors';
import Loader from '../Components/Common/Loader';
import storage from '../Services/storage';
import {
  loadChatMessages,
  loadMoreChatMessages,
  sendChatMessage,
} from '../Store/api/chat';
import {addMessage} from '../Store/entities/messages';

const URL = 'ws://192.168.100.25:5000';

function ChatModal(props) {
  const {thread} = props.route.params;

  const [initializing, setInitializing] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [userAsset, setUserAsset] = useState([]);
  const [offset, setOffset] = useState(1);

  const dispatch = useDispatch();

  // State selector
  const messages = useSelector((state) => state.entities.messages);
  const user = useSelector((state) => state.auth.user.data);
  const token = useSelector((state) => state.auth.state.token);
  console.log('messages====', messages.list);
  // console.log('current user=====', user);

  let flatList = useRef();

  let conn = new WebSocket(URL);

  useEffect(() => {
    conn.onopen = async () => {
      console.log('connection established');
      const userData = {
        sId: user[0].id,
        command: 'save',
      };
      conn.send(JSON.stringify(userData));
    };

    conn.onmessage = (e) => {
      const rMsg = JSON.parse(e.data);

      const rData = {
        from_id: thread.id,
        to_id: user[0].id,
        message: rMsg.message,
      };

      connection.onerror = function (error) {
        console.log('WebSocket Error ' + error);
      };

      dispatch(addMessage(rData));
    };

    getAsset();
    initializeChat();
    // return () => {
    //   conn.onclose((e) => console.log('close server', e));
    // };
  }, []);

  const getAsset = async () => {
    const userAsset = await storage.get('userAsset');
    setUserAsset(userAsset);
  };

  const initializeChat = async () => {
    const fromId = user[0].id;
    const toId = thread.id;

    const formData = new FormData();
    formData.append('token', token);
    formData.append('from_id', fromId);
    formData.append('to_id', toId);
    formData.append('ofset', 0);

    console.log(`token=${token}----fromId=${fromId}-------toId=${toId}`);

    dispatch(
      loadChatMessages({
        body: formData,
        onSuccess: (res) => {
          // console.log('CHAT LIST=======', res.data.chats);
          // setInitializing(true);
        },
      }),
    );
  };

  const moreChatMessages = () => {
    const fromId = user[0].id;
    const toId = thread.id;

    setOffset(offset + 1);
    const formData = new FormData();
    formData.append('token', token);
    formData.append('from_id', fromId);
    formData.append('to_id', toId);
    formData.append('ofset', offset);

    dispatch(
      loadMoreChatMessages({
        body: formData,
        onSuccess: (res) => {
          console.log('more chat=======', res.data);
        },
      }),
    );
  };

  const submitMessage = () => {
    const sendMsg = {
      rId: thread.id,
      command: 'message',
      message: messageText,
    };

    conn.send(JSON.stringify(sendMsg));

    const data = new FormData();
    const currentDate = Date.now();
    data.append('token', token);
    data.append('from_id', user[0].id);
    data.append('to_id', thread.id);
    data.append('message', messageText);
    // data.append('created_at', currentDate);

    dispatch(
      sendChatMessage({
        body: data,
        onSuccess: (res) => {
          console.log('send chat message response=====', res.data);
          setMessageText('');
        },
      }),
    );
    // dispatch(addMessage(msgData));
  };

  const renderHeader = () => {
    const chatTitle = thread.uName;
    return (
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{paddingLeft: 5, paddingRight: 12}}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Ionicons name="ios-arrow-back" size={40} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>
            Chat with{' '}
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textTransform: 'capitalize',
              }}>
              {chatTitle || 'Moonstruck User[0]'}
            </Text>
          </Text>
        </View>

        <FontAwesome5 size={30} name="envelope" color={Colors.primary} />
      </View>
    );
  };

  const renderChatList = () => {
    // const {messages} = props;
    // const {user[0]} = props;
    return (
      <FlatList
        ref={flatList}
        style={styles.chatList}
        data={messages.list}
        inverted={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.01}
        onEndReached={moreChatMessages}
        renderItem={({item}) => {
          // console.log('SENDER => ', item);
          const inverted = item.to_id === user[0].id;
          // const sender = getMember(item.sender) || {};
          return (
            <MessageBar
              message={item}
              inverted={inverted}
              userImage={
                item.to_id === user[0].id
                  ? {
                      uri: `data:image/jpeg;base64,${JSON.stringify(
                        thread.dp,
                      )}`,
                    }
                  : {
                      uri: `data:image/jpeg;base64,${JSON.stringify(
                        userAsset[0],
                      )}`,
                    }
              }
            />
          );
        }}
        ItemSeparatorComponent={renderListSeparator}
        keyExtractor={(item, index) => user[0].id + index + item.message}
      />
    );
  };

  const renderListSeparator = (props) => {
    return <View style={{height: 15}} />;
  };

  const renderMessageInput = () => {
    return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''}>
        <View style={styles.messageInputWrapper}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Type Message"
              value={messageText}
              multiline={true}
              onChangeText={(text) => {
                setMessageText(text);
              }}
              style={styles.textInput}
            />
            <TouchableOpacity
              onPress={submitMessage}
              style={{
                height: 40,
                justifyContent: 'center',
                marginRight: 3,
              }}>
              <MaterialCommunityIcons
                name="send"
                size={30}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground style={{flex: 1}} source={Images.BluredBackground}>
        <View style={{flex: 1}}>
          {/* ////////-- HEADER --/////// */}
          {renderHeader()}
          {/* ////////-- Chat List --/////// */}

          {initializing ? (
            <View style={{flex: 1}} />
          ) : (
            <>
              {messages.loading ? (
                <Loader />
              ) : (
                <View style={styles.mainWrapper}>{renderChatList()}</View>
              )}
            </>
          )}
          {/* ////////-- Message Input --/////// */}
          {renderMessageInput()}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default ChatModal;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'DINRoundPro',
  },
  mainWrapper: {
    paddingHorizontal: 15,
    flex: 1,
  },
  chatList: {},
  messageInputWrapper: {
    width: '100%',
    paddingVertical: 5,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    marginBottom: Platform.OS === 'android' ? 55 : 40,
  },
  inputContainer: {
    // position: 'absolute',
    // top: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 5,
  },
  textInput: {
    flex: 1,
    maxHeight: 150,
    marginLeft: 5,
    fontSize: 18,
    lineHeight: 25,
    paddingTop: 0,
    paddingBottom: 10,
    color: 'black',
    alignItems: 'center',
  },
});
