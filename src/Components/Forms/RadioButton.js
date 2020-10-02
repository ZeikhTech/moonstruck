import * as React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {RadioButton} from 'react-native-paper';

function AppRadioButton(props) {
  const [checked, setChecked] = React.useState();

  return Platform.OS === 'android' ? (
    <View style={styles.radio}>
      <RadioButton.Android
        value="first"
        color="#33A4FF"
        uncheckedColor="white"
        status={checked === 'first' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('first')}
      />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Male</Text>
      </View>

      <RadioButton.Android
        value="second"
        color="#33A4FF"
        uncheckedColor="white"
        status={checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('second')}
      />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Female</Text>
      </View>
    </View>
  ) : (
    <View style={styles.radio}>
      <RadioButton.IOS
        value="first"
        color="#33A4FF"
        uncheckedColor="white"
        status={checked === 'first' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('first')}
      />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Male</Text>
      </View>

      <RadioButton.IOS
        value="second"
        color="#33A4FF"
        uncheckedColor="white"
        status={checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('second')}
      />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Female</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  radio: {
    flexDirection: 'row',
    marginLeft: 25,
  },
  label: {
    fontSize: 16,
    color: 'white',
    justifyContent: 'center',
  },
  labelContainer: {
    justifyContent: 'center',
  },
});

export default AppRadioButton;
