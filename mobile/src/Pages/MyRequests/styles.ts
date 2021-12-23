import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#E1D9D9',
    padding: 40,
  },

  searchForm: {
    marginBottom: 24,
    backgroundColor: '#FFF',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  searchInput: {
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 16,
    width: 300,
  },

  buttonSearch: {
    margin: 8,
  },

  buttonCarrinho: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '40%',
    height: 50,
    backgroundColor: '#F94C4C',
    alignSelf: 'flex-end',
    borderRadius: 8,
  },

  textCarrinho: {
    fontFamily: 'RobotoRegular',
    fontSize: 20,
    color: '#FFF',
    padding: 12,
  },

  cart: {
    marginRight: 12,
    height: 24,
    width: 24,
  },

  items: {
    marginTop: 12,
  }
  

  


});

export default styles;