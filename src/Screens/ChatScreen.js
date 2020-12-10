import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ChatScreen(props) {
  console.log(props.route.params);
  return (
    <View style={styles.container}>
      <Text>Chat</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatScreen;
