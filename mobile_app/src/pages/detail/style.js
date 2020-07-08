import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.backgroundBar,
  },

  image: {
    marginTop: 30,
    marginBottom: 30,
    width: 150,
    height: 230,
    alignSelf: 'center',
  },

  boxImage: {
    backgroundColor: colors.background,
  },

  boxDetails: {
    padding: 30,
    alignItems: 'center',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textDetail: {
    margin: 5,
  },

  price: {
    margin: 5,
    textAlign: 'center',
  },

  boxRowButtons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  boxButtons: {
    margin: 15,
  },

  button: {
    margin: 10,
  },

  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
  },
});
