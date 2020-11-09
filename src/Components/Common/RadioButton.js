import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';

import Colors from '../../Constants/Colors';

export default (props) => {
  const {onChange, value} = props;
  return (
    <RadioButton.Group onValueChange={(value) => onChange(value)} value={value}>
      <View style={styles.radio}>
        <RadioButton
          value="Male"
          color={Colors.primary}
          uncheckedColor={Colors.white}
        />
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Male</Text>
        </View>
        <RadioButton
          value="Female"
          color={Colors.primary}
          uncheckedColor={Colors.white}
        />
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Female</Text>
        </View>
        <Text>{'\n'}</Text>
      </View>
    </RadioButton.Group>
  );
};

const styles = StyleSheet.create({
  radio: {
    flexDirection: 'row',
    marginLeft: 25,
  },
  label: {
    fontSize: 20,
    color: 'white',
  },
  labelContainer: {
    justifyContent: 'center',
  },
});
