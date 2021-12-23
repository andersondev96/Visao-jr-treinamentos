import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Loupe from '../../assets/icons/loupe.png';
import Cart from '../../assets/icons/cart.png'
import Items from '../../components/Items';


function MyRequets() {
  const {navigate} = useNavigation();

  function handleNavigateToCart() {
    navigate('Cart');
  }
  
  return (
    <View style={styles.container}>
    <Header title="Meus Pedidos" />

    <View style={styles.searchForm}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar por ..."
      />

      <RectButton>
        <Image source={Loupe} style={styles.buttonSearch} />
      </RectButton>
      
    </View>

    
    <RectButton 
      style={styles.buttonCarrinho}
      onPress={handleNavigateToCart}
    >
      <Text style={styles.textCarrinho}>Carrinho</Text>
      <Image source={Cart} style={styles.cart}/>
    </RectButton>

  <ScrollView
  style={styles.items}
  contentContainerStyle={{
    paddingTop: 12,
  }}
  >
    <Items />
    <Items />
    <Items />
    <Items />
    <Items />
    <Items />
    <Items />
  </ScrollView>
      



    </View>

  );
}

export default MyRequets;