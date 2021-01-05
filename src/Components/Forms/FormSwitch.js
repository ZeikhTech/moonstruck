import React from 'react';
import {useFormikContext} from 'formik';
import {Switch} from 'react-native';

import Colors from '../../Constants/Colors';

function AppFormCalendar({name}) {
  const {setFieldValue, values} = useFormikContext();

  const onChange = () => {
    setFieldValue(name, !values[name]);
  };

  return (
    <Switch
      value={values[name]}
      thumbColor={Colors.white}
      ios_backgroundColor="#3e3e3e"
      onValueChange={onChange}
      trackColor={{
        false: Colors.white,
        true: Colors.toggleSwitch,
      }}
    />
  );
}

export default AppFormCalendar;
