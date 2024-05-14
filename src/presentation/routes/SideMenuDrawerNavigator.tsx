


import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens';

const Drawer = createDrawerNavigator();

//*DrawerNavigator: Es un Side Menú que obtendra las opciones de navegación
//*Este me crea la almohadilla del menú de navegación y sidebar por defecto
export const  SideMenuDrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
