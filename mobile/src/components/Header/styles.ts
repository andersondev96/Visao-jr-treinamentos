import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    paddingTop: 20,
    marginBottom: 50,
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'HolidayFree',
    fontSize: 24,
    color: '#FFF',
  },

  backButton: {
    width: 24,
    resizeMode: 'contain',
  }

});

export default styles;