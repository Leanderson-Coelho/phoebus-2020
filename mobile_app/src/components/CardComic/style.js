import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  leftItem: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },

  rightItem: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },

  a: {
    backgroundColor: 'red',
  },

  b: {
    backgroundColor: 'blue',
  },

  image: {
    width: 150,
    height: 230,
  },
});
