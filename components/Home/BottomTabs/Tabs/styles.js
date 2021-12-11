import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.GRAY,
    padding: 10,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  text: {
    color: COLORS.BLACK,
  },
});

export default styles;
