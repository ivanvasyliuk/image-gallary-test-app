import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppNavigator from './AppNavigator';
import screens from './screens';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={screens.AppNavigator} component={AppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
