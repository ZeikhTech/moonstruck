import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {useFormikContext} from 'formik';

import Colors from '../../Constants/Colors';

function AppFormField({name, ...otherProps}) {
  const {setFieldTouched, setFieldValue, values} = useFormikContext();

  return (
    <TextInput
      style={styles.zipcodeInput}
      onBlur={() => setFieldTouched(name)}
      onChangeText={(text) => setFieldValue(name, text)}
      value={values[name]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  zipcodeInput: {
    padding: 10,
    fontSize: 18,
    width: '45%',
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
    color: Colors.white,
    borderColor: Colors.white,
  },
});

export default AppFormField;
