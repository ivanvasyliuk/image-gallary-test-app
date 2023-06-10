import {createStackNavigator} from '@react-navigation/stack';
import GallaryScreen from '../screens/Gallary/GallaryScreen';
import ImagePreview from '../screens/ImagePreview/ImagePreview';
import screens from './screens';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screens.Gallary} component={GallaryScreen} />
      <Stack.Screen name={screens.ImagePreview} component={ImagePreview} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
