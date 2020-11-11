import React from 'react';
import {View} from 'react-native';
import {useFormikContext} from 'formik';

import ErrorMessage from './ErrorMessage';
import ImageInputList from '../Common/ImageInputList';

function FormImagePicker({name}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (i) => {
    setFieldValue(
      name,
      imageUris.filter((index) => index !== i),
    );
  };

  return (
    <>
      <View style={{alignItems: 'center', top: 20}}>
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </View>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </>
  );
}

export default FormImagePicker;
