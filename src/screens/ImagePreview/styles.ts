import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  loaderContainer: {
    position: 'absolute',
    top: '49%',
    left: 0,
    right: 0,
  },
});
export default styles;
