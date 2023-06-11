import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import theme from '../styles/theme';
import AppNavigator from './AppNavigator';
import screens from './screens';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={screens.AppNavigator} component={AppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
