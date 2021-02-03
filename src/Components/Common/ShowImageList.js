import React, {useRef} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import ImageInput from './ImageInput';

export default ({imageUris = [], onRemoveImage, onAddImage}) => {
  const scrollView = useRef();

  return (
    <View style={styles.container}>
      <ScrollView
        // style={{width: '100%'}}
        ref={scrollView}
        // onContentSizeChange={() => scrollView.current.scrollToEnd()}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
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
        <View style={{alignItems: 'center'}}>
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
    flexDirection: 'row',
    // flex: 1,
    // marginHorizontal: 45,
    // paddingHorizontal: 50,
    // marginTop: 25,
    width: '90%',
  },
  image: {
    marginRight: 50,
    // alignItems: 'center',
  },
  closeIcon: {
    position: 'absolute',
    right: -30,
    top: -5,
  },
});
