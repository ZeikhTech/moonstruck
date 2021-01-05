import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ChatScreen(props) {
  // console.log(props.route.params);
  // var conn = new WebSocket('ws://192.168.0.116:8000');
  // conn.onopen = async function (e) {
  //   console.log('Connection established!');
  //   await conn.send('hello');
  // };

  // conn.onmessage = function (e) {
  //   console.log(e.data);
  // };
  return (
    <View style={styles.container}>
      <Text>Chat </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatScreen;
