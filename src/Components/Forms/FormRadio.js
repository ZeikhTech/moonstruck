import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useFormikContext} from 'formik';

import Radio from '../Common/RadioButton';
import ErrorMessage from './ErrorMessage';

function AppFormRadio({name}) {
  const {setFieldValue, errors, touched, values} = useFormikContext();

  return (
    <>
      <Radio
        onChange={(value) => setFieldValue(name, value)}
        value={values[name]}
      />
      <View style={styles.error}>
        <Text>{'\n'}</Text>
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  error: {
    marginTop: 5,
    right: 270,
  },
});

export default AppFormRadio;
