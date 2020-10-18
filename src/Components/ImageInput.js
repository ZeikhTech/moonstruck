import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default (props) => {
  const [profile, setProfile] = React.useState();

  const handlePress = async () => {
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
      return setProfile(data);
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
          <Image
            resizeMode="cover"
            style={styles.polaroid}
            source={require('../assets/Misc/polaroid.png')}
          />
        </View>
        {profile && (
          <View style={styles.wrapper}>
            <Image
              source={profile}
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
  wrapper: {
    left: 15,
    bottom: 186,
    width: '87%',
    height: '50%',
  },
  selectedImage: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
  polaroid: {
    alignSelf: 'center',
    width: '100%',
    height: 200,
    zIndex: 1,
  },
});
