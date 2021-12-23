import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    paddingTop: 2,
  },

  itens: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },

  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },

  viewText: {
    paddingRight: 10,
  },

  text: {
    fontFamily: 'LatoBold',
    fontSize: 20,
  },

  textNoQuantity: {
    fontFamily: 'LatoBold',
    fontSize: 28,
  },

  quantity: {
    fontFamily: 'LatoBold',
    fontSize: 14,
    paddingTop: 4,
  },

  noQuantity: {
    marginTop: -20,
  },

  totalValue: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
    
  },

  textTotal: {
    fontFamily: 'RobotoBold',
    fontSize: 14,
  },

  precoTotal: {
    fontFamily: 'RobotoBold',
    fontSize: 16,
    color: '#FF0000',
  },

  preco: {
    fontFamily: 'RobotoBold',
    fontSize: 20,
    color: '#FF0000',
  },

  buttonContainer: {
    paddingLeft: 32,
  },

  buttonAdd: {
    width: 24,
    height: 24,
  },

  buttonRemove: {
    width: 52,
    height: 52,
    resizeMode: 'contain',
    marginRight: 36,
  },
})

export default styles;