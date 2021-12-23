import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import styles from './styles';

import Hamburguer from '../../assets/images/hamburguer.png';
import Open from '../../assets/icons/open.png';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>COMIDA {'\n'} RÁPIDA</Text>
      <Text style={styles.subtitle}>Comida e fastfood</Text>
      <Image source={Hamburguer} style={styles.image} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Entrar</Text>
          <Image source={Open}/>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

export default Home;