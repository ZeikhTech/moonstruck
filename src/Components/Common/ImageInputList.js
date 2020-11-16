import React, {useRef} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import ImageInput from './ImageInput';

export default ({imageUris = [], onRemoveImage, onAddImage}) => {
  const scrollView = useRef();

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
        showsVerticalScrollIndicator={false}>
        <View style={{}}>
          {imageUris.map((uri, i) => (
            <View key={i} style={styles.image}>
              <ImageInput imageUri={uri} onRemove={() => onRemoveImage(uri)} />
              <Icon
                key={i}
                onPress={() => onRemoveImage(i)}
                style={styles.closeIcon}
                name="close"
                color="white"
                size={30}
              />
            </View>
          ))}
        </View>
        <View style={{alignItems: 'center', marginBottom: -1}}>
          {imageUris.length === 5 ? null : (
            <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 25,
  },
  image: {
    marginBottom: 10,
    alignItems: 'center',
  },
  closeIcon: {
    position: 'absolute',
    right: 15,
    top: -5,
  },
});
