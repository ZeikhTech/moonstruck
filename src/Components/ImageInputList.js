import React, {useRef} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import ImageInput from './ImageInput';

function ImageInputList({imageUris = [], onRemoveImage, onAddImage}) {
  const scrollView = useRef();

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}>
        {imageUris.map((uri, i) => (
          <View key={i} style={styles.image}>
            <ImageInput
              imageUri={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          </View>
        ))}
        <View style={{alignItems: 'center'}}>
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
  },
  image: {
    marginBottom: 30,
    alignItems: 'center',
  },
});

export default ImageInputList;
