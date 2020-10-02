import React from 'react';
import {View} from 'react-native';
import {useFormikContext} from 'formik';

import Button from '../Button';

function SubmitButton({title}) {
  const {handleSubmit} = useFormikContext();

  return (
    <View style={{alignItems: 'center', marginTop: 20}}>
      <Button
        title={title}
        color="white"
        textColor="#33A4FF"
        size={24}
        weight="bold"
        onPress={handleSubmit}
      />
    </View>
  );
}

export default SubmitButton;
