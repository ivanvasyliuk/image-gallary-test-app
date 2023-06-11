import {StyleSheet} from 'react-native';
import {dimensions} from '../../styles';
import colors from '../../styles/colors';

const WIDTH = dimensions.width / 2 - 12;

const styles = StyleSheet.create({
  container: {
    height: 210,
    width: WIDTH,
    marginVertical: 4,
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderRadius: 7,
    overflow: 'hidden',
    backgroundColor: colors.white,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  left: {marginRight: 4, marginLeft: 8},
  right: {
    marginLeft: 4,
    marginRight: 8,
  },

  title: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 15,
    marginHorizontal: 10,
    marginTop: 8,
    color: colors.black,
  },
  userNameTitle: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18,
    marginLeft: 10,
    marginTop: 8,
    marginBottom: 5,
    color: colors.black,
  },
  loaderContainer: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
  },
});
export default styles;
