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
    fontSize: 19,
    fontWeight: '600',
    color: COLORS.BLACK,
  },
  descriptionWrapper: {
    flexDirection: 'row',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reviews: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.GRAY,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {
    backgroundColor: COLORS.CAPUT_MORTUUM,
    color: COLORS.SNOW,
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 10,
    marginRight: 5,
    marginTop: 10,
  },
});

export default styles;
