import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import Colors from '../Constants/Colors';

const {width} = Dimensions.get('window');

function AppCalendar(props) {
  const [date, setDate] = useState(null);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={showDatepicker}>
      <Text style={styles.input}>
        {date ? moment(date).format('MMMM, DD YYYY') : ''}
      </Text>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date || new Date()}
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.52,
    height: 45,
    borderWidth: 3,
    elevation: 9,
    borderColor: Colors.primary,
  },
  input: {
    fontSize: 20,
    color: Colors.dark,
  },
});

export default AppCalendar;
