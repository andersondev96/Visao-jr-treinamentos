import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function TotalValue(props: any) {
  return (
    <View style={styles.container}>
      <View style={styles.finalValue}>
        <Text style={styles.textValue}> Total: R$ 88, 88</Text>
        {props.children}
      </View>
    </View>
  );
}

export default TotalValue;