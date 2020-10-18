import React from 'react';
import {useFormikContext} from 'formik';

import ErrorMessage from './ErrorMessage';
import ImageInput from '../ImageInput';
import ImageInputList from '../ImageInputList';

function FormImagePicker({name}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  return (
    <>
      <ImageInputList imageUris={imageUris} onChangeImage={handleAdd} />
    </>
  );
}

export default FormImagePicker;
