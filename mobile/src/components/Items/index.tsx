import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import IceCream from '../../assets/images/sorvete.png';
import Add from '../../assets/icons/add.png';
import Remove from '../../assets/icons/remove.png';

import styles from './styles';

interface ItemsProps {
  quantity?: number;
  total?: boolean;
  remove?: boolean;
}

const Items: React.FC<ItemsProps> = ({quantity, total, remove}) => {

  return (
    <View style={styles.container}>
    <View style={styles.itens}>
      <Image source={IceCream} style={styles.image} />

      <View style={styles.viewText}>
          <Text 
            style={quantity ? styles.text : styles.textNoQuantity}>
              Sorvete
          </Text>
          <Text 
            style={quantity ? styles.quantity : styles.noQuantity}>
              {quantity ? `Quantidade: ${quantity}` : '' }
          </Text>

          
      <View style={styles.totalValue}>
        <Text style={styles.textTotal}>{total ? 'Total: ' : ''}</Text>
        <Text 
          style={total ? styles.precoTotal : styles.preco}>
            R$ 2,00
          </Text>
      </View>
      </View>
      <View style={styles.buttonContainer}>
        <RectButton>
          <Image
          source={ remove ? Remove : Add } 
          style={remove ? styles.buttonRemove : styles.buttonAdd} />
        </RectButton>
      </View>


    </View>
      
    </View>
  );

}

export default Items;