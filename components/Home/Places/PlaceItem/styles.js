import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
  },
  container: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 18,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  titleContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
  description: {
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.GRAY,
    marginRight: 3,
  },
  reviewText: {
    fontWeight: '400',
    color: COLORS.GRAY,
  },
  ratingIcon: {
    color: COLORS.ORANGE_YELLOW_CRAYOLA,
  },
});

export default styles;
