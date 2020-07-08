import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.background,
  },

  list: {
    padding: 10,
  },

  helpText: {
    alignSelf: 'center',
    marginBottom: 10,
  },
});
