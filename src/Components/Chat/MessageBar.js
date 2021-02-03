import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import profilePic from '../../assets/Misc/avatar.png';
// import VideoPlayer from '../video/VideoPlayer';
// import ImageView from 'react-native-image-viewing';
import moment from 'moment';
import Colors from '../../Constants/Colors';

export default (props) => {
  const {message, inverted, title, userImage} = props;

  let reverseStyle = {};
  if (inverted) {
    reverseStyle.flexDirection = 'row-reverse';
  }
  const {messageType = 'text'} = message;

  const [imageViewVisible, setImageViewVisible] = useState(false);

  return (
    <View style={[styles.wrapper, reverseStyle]}>
      <View style={styles.profilePicWrapper}>
        <Image
          style={styles.profilePic}
          source={userImage || profilePic}
          resizeMode="cover"
        />
      </View>
      <View style={styles.messageContentWrapper}>
        {messageType === 'text' && (
          <Text style={styles.messageText}>{message.message}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  profilePicWrapper: {
    height: 39,
    width: 39,
    borderRadius: 39,
    overflow: 'hidden',
    marginHorizontal: 10,
    marginTop: 10,
  },
  profilePic: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ccc',
  },
  messageContentWrapper: {
    backgroundColor: Colors.secondary,
    flex: 1,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
  },
  titleTimeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  title: {
    fontSize: 16,
    fontFamily: 'DINRoundPro-Bold',
    color: 'white',
  },
  time: {
    fontSize: 12,
    fontFamily: 'DINRoundPro-Bold',
    color: 'white',
  },
  messageText: {
    fontSize: 16,
    fontFamily: 'DINRoundPro-Bold',
    color: '#fff',
  },
});
