import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Video from 'react-native-video';

const videoSource = require('../assets/Backgrounds/Intro.m4v');

const {height} = Dimensions.get('window');

function BackgroundVideo(props) {
  return (
    <Video
      style={styles.video}
      source={videoSource}
      resizeMode="cover"
      paused={false}
      repeat={true}
    />
  );
}

const styles = StyleSheet.create({
  video: {
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
});

export default BackgroundVideo;
