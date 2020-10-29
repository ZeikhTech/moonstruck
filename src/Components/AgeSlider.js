import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import Colors from '../Constants/Colors';

export default (props) => {
  const [age, setAge] = useState([18, 70]);
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.rangeLabel}>AGE RANGE:</Text>
        <Text style={styles.rangeValue}>{`${age[0]} TO ${age[1]} `}</Text>
      </View>
      <View style={styles.container}>
        <MultiSlider
          values={[age[0], age[1]]}
          sliderLength={300}
          onValuesChange={(value) => setAge(value)}
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
