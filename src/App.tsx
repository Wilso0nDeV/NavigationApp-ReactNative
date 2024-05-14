import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {Text, View} from 'react-native';
import { StackNavigator } from './presentation/routes/StackNavigator';
import { SideMenuDrawerNavigator } from './presentation/routes/SideMenuDrawerNavigator';

export const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuDrawerNavigator />
    </NavigationContainer>
  );
};
