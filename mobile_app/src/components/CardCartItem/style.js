import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    elevation: 6,
    borderRadius: 2,
    backgroundColor: colors.button,
    padding: 10,
    marginTop: 15,
  },

  infoGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    alignSelf: 'center',
    padding: 5,
  },

  textColor: {
    color: 'white',
  },
});
