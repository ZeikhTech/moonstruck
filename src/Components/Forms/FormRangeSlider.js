import React from 'react';
import {useFormikContext} from 'formik';

import RangeSlider from '../Common/RangeSlider';

function AppFormRangeSlider({name}) {
  const {setFieldValue, values} = useFormikContext();

  return (
    <RangeSlider
      value={values[name]}
      onChange={(value) => setFieldValue(name, value)}
    />
  );
}

export default AppFormRangeSlider;
