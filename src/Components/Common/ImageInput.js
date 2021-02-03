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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Images from '../../Constants/Images';

export default ({imageUri, onChangeImage}) => {
  const handlePress = () => {
    if (!imageUri) selectImage();
  };

  const selectImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        compressImageMaxHeight: 320,
        compressImageMaxWidth: 320,
        compressImageQuality: 1,
        mediaType: 'photo',
        cropping: false,
        includeBase64: true,
      });
      var filename = image.path.split('/').pop();
      const data = {
        // name: filename,
        uri: image.data,
        // type: image.mime,
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
              source={{uri: `data:image/jpeg;base64,${imageUri}`}}
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
    height: hp('30%'),
    // width: '70%',
  },
  plaroidContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
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
    bottom: 190,
    width: wp('65%'),
    height: hp('10%'),
  },
  selectedImage: {
    width: wp('63%'),
    height: hp('26%'),
  },
  polaroid: {
    width: wp('65%'),
    height: hp('29%'),
    zIndex: 1,
  },
});
