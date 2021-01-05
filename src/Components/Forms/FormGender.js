import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useFormikContext} from 'formik';

import Images from '../../Constants/Images';

function AppFormCalendar({name}) {
  const {setFieldValue, values} = useFormikContext();

  const manIconSource = values[name] ? Images.manON : Images.manOFF;
  const womanIconSource = values[name] ? Images.womanON : Images.womanOFF;

  return (
    <View>
      <TouchableOpacity onPress={() => setFieldValue(name, !values[name])}>
        <Image
          style={name === 'is_man' ? styles.manOff : styles.womanOff}
          resizeMode="contain"
          source={name === 'is_man' ? manIconSource : womanIconSource}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  manOff: {
    width: 80,
    height: 80,
  },
  womanOff: {
    width: 90,
    height: 90,
  },
});

export default AppFormCalendar;
