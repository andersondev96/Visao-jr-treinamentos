import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

interface InputProps {
  description: string;
}

const Input: React.FC<InputProps> = ({description}) => {
  return (

      <View>
        <View style={styles.labelNome}>
          <Text style={styles.textNome}>{description}</Text>
          <TextInput style={styles.inputNome} />
        </View>
    </View>
  );
}

export default Input;