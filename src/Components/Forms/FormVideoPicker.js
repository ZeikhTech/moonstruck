import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useFormikContext} from 'formik';
import Icon from 'react-native-vector-icons/AntDesign';

import VideoInput from '../Common/VideoInput';

function FormVideoPicker({name}) {
  const {setFieldValue, values} = useFormikContext();
  const videoUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, uri);
  };

  const handleRemove = (uri) => {
    setFieldValue(name, !uri);
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <VideoInput videoUri={videoUris} onVideoChange={handleAdd} />
      {videoUris && (
        <Icon
          onPress={handleRemove}
          style={styles.closeIcon}
          name="close"
          color="white"
          size={30}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    right: -40,
    top: -5,
  },
});

export default FormVideoPicker;
