import React, {useRef} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({imageUris = [], addImage}) {
  const scrollView = useRef();

  return (
    <View>
      <View style={styles.container}>
        <ImageInput image={imageUris} onChangeImage={(uri) => addImage(uri)} />
        {/* <ImageInput onChangeImage={(uri) => addImage(uri)} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    left: 60,
    flexDirection: 'column',
  },
  image: {
    marginTop: 30,
  },
});

export default ImageInputList;
