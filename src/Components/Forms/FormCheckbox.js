import React from 'react';
import {useFormikContext} from 'formik';
import {CheckBox} from 'react-native-elements';

import Colors from '../../Constants/Colors';

function AppFormCalendar({name}) {
  const {setFieldValue, values} = useFormikContext();

  const handlePress = () => {
    setFieldValue(name, !values[name]);
  };

  return (
    <CheckBox
      size={40}
      checked={values[name]}
      uncheckedColor={Colors.white}
      checkedColor={name === 'woman' ? Colors.secondary : Colors.range}
      onPress={handlePress}
    />
  );
}

export default AppFormCalendar;
