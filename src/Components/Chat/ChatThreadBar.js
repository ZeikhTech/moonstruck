import React from 'react';
import Row from '../layout/Row';
import {View, Text, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import {connect} from 'react-redux';
import moment from 'moment';

const ChatThreadBar = (props) => {
  const {thread, user, navigation} = props;
  //   let otherUser = {name: '', image: ''};
  //   console.log(thread);
  //   for (let i = 0; i < thread.length; i++) {
  //     const m = thread[i];
  //     if (m !== user.id) {
  //       otherUser = m;
  //       break;
  //     }
  //   }

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('chat', {thread: thread});
      }}>
      <Row
        style={{
          alignItems: 'center',
          backgroundColor: '#1F252D',
          padding: 20,
          opacity: 0.9,
        }}>
        <Avatar.Image
          source={{
            uri: `data:image/jpeg;base64,${JSON.stringify(thread.dp)}`,
          }}
          size={39}
          style={{marginTop: 5, backgroundColor: '#ccc'}}
        />
        <View style={{marginLeft: 10, flex: 1, position: 'relative'}}>
          <Row
            style={{
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View
              style={{
                marginRight: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  textTransform: 'capitalize',
                }}>
                {thread.full_name}
              </Text>
              {/* <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 16,
                  fontFamily: 'DINRoundPro',
                }}>
                {thread.lastMessage ? thread.lastMessage.text : ''}
              </Text> */}
            </View>

            {/* <Text
              style={{
                color: '#687781',
                fontSize: 12,
                fontFamily: 'DINRoundPro-Bold',
                position: 'absolute',
                right: 0,
              }}>
              {thread.lastMessage &&
                moment(thread.lastMessage.createdAt).fromNow()}
            </Text> */}
            {/* </View> */}
          </Row>
        </View>
      </Row>
    </TouchableOpacity>
  );
};

// const mapStateToProps = (state) => {
//   const {auth} = state;
//   return {user: auth.user.data};
// };

// export default connect(mapStateToProps)(ChatThreadBar);
export default ChatThreadBar;
