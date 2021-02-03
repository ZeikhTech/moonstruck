import React from 'react';
import {View, StyleSheet} from 'react-native';

export default (props) => {
  const appliedStyles = [styles.row];
  if (props.justifyCenter) appliedStyles.push(styles.justifyCenter);
  if (props.alignCenter) appliedStyles.push(styles.alignCenter);
  if (props.style) appliedStyles.push(props.style);

  return <View style={appliedStyles}>{props.children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
});
