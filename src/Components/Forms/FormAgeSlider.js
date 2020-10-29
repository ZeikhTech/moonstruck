import React from 'react';
import {useFormikContext} from 'formik';

import AgeSlider from '../AgeSlider';

function AppAgeSlider({name}) {
  const {setFieldValue, values} = useFormikContext();

  return (
    <AgeSlider
      value={(values[name[0]], values[name[1]])}
      onChange={(value) => setFieldValue(name, value)}
    />
  );
}

export default AppAgeSlider;
