import {Text, View} from 'react-native';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components';
import { StackActions, useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
  //* popToTop, me regresa a la primera pantalla de mi aplicación
  //* actual mente se dentro de un "navigator.dispatch"
  const navigator = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text>Settings Screen</Text>
      <PrimaryButton 
        title='Regresar'
        onPress={()=> navigator.goBack()}
      />
      <PrimaryButton 
        title='Regresar a Home'
        onPress={()=> navigator.dispatch(StackActions.popToTop)}
      />
    </View>
  );
};
