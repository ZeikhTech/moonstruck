import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useFormikContext} from 'formik';

import AppTextInput from '../Common/TextInput';
import ErrorMessage from './ErrorMessage';
import Colors from '../../Constants/Colors';

function AppFormField({name, width, label, blurb = false, ...otherProps}) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      {blurb ? (
        <>
          <View style={styles.textAreaContainer}>
            <TextInput
              // onBlur={() => setFieldTouched(name)}
              onChangeText={(text) => setFieldValue(name, text)}
              value={values[name]}
              style={styles.textInput}
              multiline={true}
              numberOfLines={10}
              placeholderTextColor={Colors.light}
              placeholder="Tell us about yourself and what you are looking for..."
            />
          </View>
        </>
      ) : (
        <>
          <AppTextInput
            onBlur={() => setFieldTouched(name)}
            onChangeText={(text) => setFieldValue(name, text)}
            value={values[name]}
            width={width}
            label={label}
            {...otherProps}
          />
          <View style={styles.error}>
            <ErrorMessage error={errors[name]} visible={touched[name]} />
          </View>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  error: {
    bottom: 5,
  },
  textAreaContainer: {
    width: '80%',
    marginVertical: 10,
    borderWidth: 2,
    borderColor: Colors.secondary,
  },
  textInput: {
    padding: 10,
    height: 200,
    fontSize: 20,
    fontStyle: 'italic',
    color: Colors.white,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },
});

export default AppFormField;
