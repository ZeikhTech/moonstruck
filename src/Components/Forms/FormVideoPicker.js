import React from 'react';
import {View} from 'react-native';
import {useFormikContext} from 'formik';

import ErrorMessage from './ErrorMessage';
import VideoInput from '../VideoInput';

function FormVideoPicker({name}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();
  const videoUris = values[name];
  const handleAdd = (uri) => {
    setFieldValue(name, uri);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      videoUris.filter((imageUri) => imageUri !== uri),
    );
  };

  return (
    <>
      <View style={{alignItems: 'center', top: 20}}>
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </View>
      <VideoInput videoUris={videoUris} onChange={handleAdd} />
    </>
  );
}

export default FormVideoPicker;
