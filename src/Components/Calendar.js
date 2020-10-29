import React, {useState} from 'react';
import {Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import Colors from '../Constants/Colors';

const {width} = Dimensions.get('window');

export default (props) => {
  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    setDate(selectedDate);
    props.onDate(moment(selectedDate).format('MMMM, DD YYYY'));
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={showDatepicker}>
      <Text style={styles.input}>
        {date ? moment(date).format('MMMM, DD YYYY') : null}
      </Text>

      {show && (
        <DateTimePicker
          mode="date"
          value={date !== '' ? date || new Date() : null}
          onChange={onChange}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
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
