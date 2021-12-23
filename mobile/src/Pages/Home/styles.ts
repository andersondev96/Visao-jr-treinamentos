import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E1D9D9',
  },

  title: {
    fontFamily: 'LatoBold',
    fontSize: 64,
    color: '#FF0000',
    marginBottom: 12,
  },

  subtitle: {
    fontFamily: 'HolidayFree',
    fontSize: 32,
    color: '#000',
    marginBottom: 12,
  },

  image: {
    height: 220,
    width: 220,
    marginBottom: 12,
  },

  buttonContainer: {
    marginTop: 18,
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#023D70',
    padding: 18,
    height: 60,
    width: '50%',
  },

  buttonText: {
    fontFamily: 'RobotoMedium',
    fontSize: 24,
    color: '#FFF',
    marginRight: 100,
  }
});

export default styles;
