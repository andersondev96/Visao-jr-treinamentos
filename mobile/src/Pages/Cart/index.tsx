import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from './styles';

import Header from '../../components/Header';
import Items from '../../components/Items';
import TotalValue from '../../components/TotalValue';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function Cart() {
  const { navigate } = useNavigation();

  function handleNavigateToClientData() {
    navigate('ClientData');
  }

  return (
    <View style={styles.container}>
      <Header title="Carrinho" />

      <ScrollView
        style={styles.productItem}
      >
        <Items quantity={2} total remove />
        <Items quantity={2} total remove />
        <Items quantity={2} total remove />
        <Items quantity={2} total remove />
        <Items quantity={2} total remove />
        <Items quantity={2} total remove />
      </ScrollView>

      <TotalValue>
        <RectButton
          style={styles.buttonConfirmar}
          onPress={handleNavigateToClientData}
        >
        <Text style={styles.textConfirmar}>Confirmar</Text>
        </RectButton>
      </TotalValue>

    </View>
  );
}

export default Cart;