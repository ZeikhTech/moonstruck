import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import Images from '../../Constants/Images';

export default ({imageUri, onChangeImage}) => {
  const handlePress = () => {
    if (!imageUri) selectImage();
  };

  const selectImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 720,
        height: 720,
        mediaType: 'photo',
      });
      var filename = image.path.split('/').pop();
      const data = {
        name: filename,
        uri: image.path,
        type: image.mime,
      };
      if (image) onChangeImage(data.uri);
    } catch (e) {
      if (e.code !== 'E_PICKER_CANCELLED') {
        console.log(e);
        Alert.alert(
          'Sorry, there was an issue attempting to get the image you selected. Please try again',
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.plaroidContainer}>
          <ImageBackground
            resizeMode="cover"
            style={styles.polaroid}
            source={Images.Frame}>
            <View style={styles.CameraIconContainer}>
              {!imageUri && (
                <Image
                  style={styles.CameraIcon}
                  source={Images.CameraIcon}
                  resizeMode="center"
                />
              )}
            </View>
          </ImageBackground>
        </View>
        {imageUri && (
          <View style={styles.wrapper}>
            <Image
              source={{uri: imageUri}}
              style={styles.selectedImage}
              resizeMode="cover"
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
    width: '70%',
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
  CameraIcon: {
    height: 80,
    width: 80,
  },
  wrapper: {
    alignItems: 'center',
    bottom: 185,
    width: '100%',
    height: '55%',
  },
  selectedImage: {
    width: '85%',
    height: '86%',
  },
  polaroid: {
    width: '100%',
    height: 200,
    zIndex: 1,
  },
});
