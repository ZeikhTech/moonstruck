import React from 'react';
import {View} from 'react-native';
import {useFormikContext} from 'formik';

import Button from '../Common/Button';

function SubmitButton({title, marginTop, size, ...otherprops}) {
  const {handleSubmit} = useFormikContext();

  return (
    <View style={{alignItems: 'center', marginTop: marginTop}}>
      <Button
        onPress={handleSubmit}
        title={title}
        size={size}
        {...otherprops}
      />
    </View>
  );
}

export default SubmitButton;
