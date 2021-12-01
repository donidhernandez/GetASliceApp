import {StyleSheet} from 'react-native';
import COLORS from '../../../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 30,
    padding: 15,
  },
  container: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  descriptionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  delivery: {
    fontSize: 13,
    color: COLORS.TART_ORANGE,
  },
  rating: {
    backgroundColor: COLORS.SNOW,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  ratingText: {
    fontWeight: '600',
  },
});

export default styles;
