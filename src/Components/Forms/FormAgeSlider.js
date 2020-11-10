import React from 'react';
import {useFormikContext} from 'formik';

import AgeSlider from '../Common/AgeSlider';

function AppAgeSlider({name}) {
  const {setFieldValue, values} = useFormikContext();
  const ageVal = values[name];
  return (
    <AgeSlider
      value={values[name]}
      onChange={(value) => setFieldValue(name, value)}
    />
  );
}

export default AppAgeSlider;
