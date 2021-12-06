import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 15,
    flexDirection: 'row',
  },
  searchBar: {
    textInput: {
      backgroundColor: COLORS.ORANGE_YELLOW_CRAYOLA,
      borderRadius: 20,
      fontWeight: '700',
      marginTop: 7,
      color: COLORS.BLACK,
    },
    textInputContainer: {
      backgroundColor: COLORS.ORANGE_YELLOW_CRAYOLA,
      borderRadius: 50,
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10,
      color: COLORS.BLACK,
    },
  },
  searchIcon: {
    marginLeft: 15,
  },
  loadingResults: {
    flexDirection: 'row',
    marginRight: 8,
    backgroundColor: COLORS.SNOW,
    padding: 9,
    borderRadius: 30,
    alignItems: 'center',
  },
  clockIcon: {
    marginRight: 6,
    color: COLORS.GRAY,
  },
  searchText: {
    color: COLORS.GRAY,
  },
});

export default styles;
