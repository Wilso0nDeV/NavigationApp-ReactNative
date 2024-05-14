import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen,  ProductScreen,  ProfileScreen, SettingsScreen } from '../screens';
import { ProductsScreen } from '../screens/products/ProductsScreen';


export type RootStackParams = {
  Home: undefined;
  Product: { id:number , name : string} ;
  Products: undefined;
  Settings: undefined;
  Profile : undefined;
};

const Stack = createStackNavigator<RootStackParams>()

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true, //muestra el header del screen
      headerStyle:{
        elevation: 0,
      }
    }
    }>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}