import {StyleSheet} from 'react-native';
import COLORS from '../../../../../constants/colors';
const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 20,
    padding: 15,
    backgroundColor: COLORS.SNOW,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 8,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.BLACK,
  },
  rating: {
    marginRight: 8,
  },
  row: {
    flexDirection: 'row',
  },
  textContainer: {
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    color: COLORS.BLACK,
  },
});

export default styles;
