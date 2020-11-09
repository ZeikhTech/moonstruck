import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useFormikContext} from 'formik';

import Calendar from '../Common/Calendar';
import ErrorMessage from './ErrorMessage';

function AppFormCalendar({name}) {
  const {setFieldValue, errors, touched, values} = useFormikContext();

  return (
    <>
      <Calendar onDate={(value) => setFieldValue(name, value)} />
      <View style={styles.error}>
        <Text>{'\n'}</Text>
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  error: {
    top: 14,
    right: 320,
  },
});

export default AppFormCalendar;
