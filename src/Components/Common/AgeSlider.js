import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import Colors from '../../Constants/Colors';

export default (props) => {
  const {value = [], onChange} = props;

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.rangeLabel}>AGE RANGE:</Text>
        <Text style={styles.rangeValue}>{`${value[0]} TO ${value[1]} `}</Text>
      </View>
      <View style={styles.container}>
        <MultiSlider
          values={value}
          sliderLength={300}
          onValuesChange={onChange}
          min={18}
          max={70}
          step={1}
          markerStyle={{
            height: 30,
            width: 30,
            borderRadius: 20,
            backgroundColor: Colors.range,
          }}
          trackStyle={{height: 4, backgroundColor: Colors.white}}
          selectedStyle={{backgroundColor: Colors.white}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignSelf: 'center',
  },
  rangeLabel: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: 'bold',
    color: Colors.white,
  },
  rangeValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 30,
    color: Colors.secondary,
  },
});
