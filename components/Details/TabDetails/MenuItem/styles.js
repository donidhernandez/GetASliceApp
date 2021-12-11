import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  detailsWrapper: {
    width: 240,
    justifyContent: 'space-evenly',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    color: COLORS.BLACK,
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
    color: COLORS.BLACK,
  },
  price: {
    fontSize: 13,
    fontWeight: '500',
    color: COLORS.TART_ORANGE,
  },
});

export default styles;
