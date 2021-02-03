import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import Loader from '../Components/Common/Loader';
import Row from '../Components/layout/Row';
import ChatThreadBar from '../Components/Chat/ChatThreadBar';
import Images from '../Constants/Images';
import {loadChatThreads} from '../Store/api/chat';
import {connect, useDispatch, useSelector} from 'react-redux';
import {updateMe} from '../Store/api/auth';

import Routes from '../Navigation/routes';

function MessageList(props) {
  const [msg, setMsg] = useState('');
  const dispatch = useDispatch();
  const chatThreads = useSelector((state) => state.entities.chatThreads);

  useEffect(() => {
    dispatch(
      loadChatThreads({
        onSuccess: (res) => {
          console.log('Chat_threads====', res.data);
          if (res.data.users === 'No one liked you yet') {
            setMsg('You have no likes yet.');
          }
        },
      }),
    );
  }, []);

  const renderList = () => {
    return (
      <FlatList
        data={chatThreads.list}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{height: 5}} />}
        renderItem={({item, index}) => {
          return <ChatThreadBar thread={item} navigation={props.navigation} />;
        }}
      />
    );
  };

  return (
    <ImageBackground
      source={Images.BluredBackground}
      style={{flex: 1}}
      resizeMode="cover">
      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
          flexDirection: 'row',
          paddingHorizontal: 30,
        }}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image
            source={Images.BackArrow}
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
        <View style={{marginLeft: 65}}>
          <Text style={{color: 'white', fontSize: 24}}>Messages</Text>
        </View>
      </View>
      <View style={{marginHorizontal: 0, marginTop: 20, flex: 1}}>
        {msg ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white', fontSize: 22}}>{msg}</Text>
          </View>
        ) : chatThreads.loading ? (
          <Loader />
        ) : (
          renderList()
        )}
      </View>
    </ImageBackground>
  );
}

export default MessageList;
