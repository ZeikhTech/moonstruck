import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';

import Images from '../../Constants/Images';

export default ({videoUris, onChange}) => {
  const pickVideo = async () => {
    try {
      const video = await ImagePicker.openPicker({
        mediaType: 'video',
      });

      var filename = video.path.split('/').pop();
      const data = {
        name: filename,
        uri: video.path,
        type: video.mime,
      };
      if (video) onChange(data.uri);
    } catch (e) {
      if (e.code !== 'E_PICKER_CANCELLED') {
        console.log(e);
        Alert.alert(
          'Sorry, there was an issue attempting to get the video you selected. Please try again',
        );
        throw new Error(e);
      }
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickVideo}>
        <View style={styles.plaroidContainer}>
          <ImageBackground
            resizeMode="cover"
            style={styles.polaroid}
            source={Images.Frame}>
            <View style={styles.CameraIconContainer}>
              {videoUris ? null : (
                <Image
                  style={styles.videoIcon}
                  source={Images.VideoIcon}
                  resizeMode="center"
                />
              )}
            </View>
          </ImageBackground>
        </View>
        {videoUris && (
          <View style={styles.wrapper}>
            <Video
              source={{uri: videoUris}}
              style={styles.selectedImage}
              resizeMode="cover"
              muted={true}
              rate={0.0}
              playInBackground={true}
            />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '67%',
  },
  plaroidContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  CameraIconContainer: {
    flex: 0.85,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoIcon: {
    height: 90,
    width: 90,
  },
  wrapper: {
    bottom: 190,
    width: '100%',
    height: '55%',
  },
  selectedImage: {
    width: '100%',
    height: '100%',
  },
  polaroid: {
    width: '100%',
    height: 200,
    zIndex: 1,
  },
});
