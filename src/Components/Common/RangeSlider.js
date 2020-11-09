import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Slider} from 'react-native-elements';

import Colors from '../../Constants/Colors';

export default (props) => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.rangeLabel}>RANGE PLEASE:</Text>
        <Text style={styles.rangeValue}>{`${props.value} MILES`}</Text>
      </View>
      <View style={styles.container}>
        <Slider
          value={props.value}
          onValueChange={props.onChange}
          step={5}
          maximumValue={1000}
          minimumValue={0}
          thumbStyle={{height: 30, width: 30, borderRadius: 25}}
          thumbTintColor={Colors.range}
          maximumTrackTintColor={Colors.white}
          minimumTrackTintColor={Colors.white}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: 5,
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
