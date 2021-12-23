import React from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import Back from '../../assets/icons/left-arrow.png';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
      <BorderlessButton
        onPress={handleGoBack}
      >
        <Image source={Back} style={styles.backButton} />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

export default Header;