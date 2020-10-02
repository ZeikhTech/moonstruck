import React, {useState} from 'react';
import {View, Text, Platform, StyleSheet, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

function AppCalendar(props) {
  const [date, setDate] = useState(null);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  console.log(date);

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttom} onPress={showDatepicker}>
        <Text style={styles.input}>
          {date ? moment(date).format('MMMM, DD YYYY') : 'Select date'}
        </Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date || new Date()}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 9,
    width: '60%',
    height: 45,
    borderWidth: 3,
    borderColor: '#33A4FF',
  },
  button: {
    fontSize: 24,
    color: 'white',
  },
});

export default AppCalendar;
