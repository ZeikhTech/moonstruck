import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';

export default (props) => {
  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.wrapper}>{props.children}</SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
