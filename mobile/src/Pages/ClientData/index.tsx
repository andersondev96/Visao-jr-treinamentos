import React from 'react';
import { View, Text, Alert } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';
import TotalValue from '../../components/TotalValue';





function ClientData() {
  const {navigate} = useNavigation();

  function handleToNavigateMyRequests() {
    Alert.alert('Pedido confirmado! ', 'Agradecemos a preferência!');
    navigate('MyRequests');
  }

  return (
    
      <View style={styles.container}>
        <Header title="Dados" />

      <ScrollView
        style={styles.InputScroll}
      >
      
        <Input description="Nome:" />
        <Input description="Endereço:" />
        <Input description="Telefone:" />
        <Input description="Forma de pagamento:" />
      

        <TotalValue>
          <RectButton
            style={styles.buttonConfirmar}
            onPress={handleToNavigateMyRequests}
          >
            <Text style={styles.textConfirmar}>Confirmar</Text>
          </RectButton>
        </TotalValue>
        </ScrollView>
      </View>
    
    
  );
}

export default ClientData;