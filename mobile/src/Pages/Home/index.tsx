import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import Hamburguer from '../../assets/images/hamburguer.png';
import Open from '../../assets/icons/open.png';

const Home = () => {
  const { navigate } = useNavigation();
  
  function handleNavigateToMyRequest() {
    navigate('MyRequests');
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>COMIDA {'\n'} RÁPIDA</Text>
      <Text style={styles.subtitle}>Comida e fastfood</Text>
      <Image source={Hamburguer} style={styles.image} />

      <View style={styles.buttonContainer}>
        <RectButton 
          style={styles.button} 
          onPress={handleNavigateToMyRequest}
        >
          <Text style={styles.buttonText}>Entrar</Text>
          <Image source={Open}/>
        </RectButton>
      </View>
      
    </View>
  );
}

export default Home;