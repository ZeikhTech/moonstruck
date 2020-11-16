import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export default (props) => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator color="dodgerblue" size="large" {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
