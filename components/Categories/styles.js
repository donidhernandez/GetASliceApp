import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    backgroundColor: COLORS.BLACK,
    paddingVertical: 20,
    paddingLeft: 20,
  },
  categoryContainer: {
    alignItems: 'center',
    marginRight: 30,
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 13,
    fontWeight: '900',
    color: COLORS.SNOW,
  },
});

export default styles;
