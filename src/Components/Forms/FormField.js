import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useFormikContext} from 'formik';

import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({name, width, ...otherProps}) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <View style={styles.error}>
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  error: {
    bottom: 5,
  },
});

export default AppFormField;
