import React from 'react';
import {View} from 'react-native';
import {useFormikContext} from 'formik';

import Button from '../Button';

function SubmitButton({title, marginTop}) {
  const {handleSubmit} = useFormikContext();

  return (
    <View style={{alignItems: 'center', marginTop: marginTop}}>
      <Button
        title={title}
        color="white"
        elevation={9}
        textColor="#33A4FF"
        size={24}
        weight="bold"
        onPress={handleSubmit}
      />
    </View>
  );
}

export default SubmitButton;
