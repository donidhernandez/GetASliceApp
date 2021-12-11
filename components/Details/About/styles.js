import {StyleSheet} from 'react-native';
import COLORS from '../../../constants/colors';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
  },
  heading: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    color: COLORS.BLACK,
  },
  descriptionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
    color: COLORS.BLACK,
  },
});

export default styles;
