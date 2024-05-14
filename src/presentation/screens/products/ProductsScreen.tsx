import { Text, View } from 'react-native';
import { type NavigationProp, useNavigation } from '@react-navigation/native';

import { globalStyles } from '../../theme/theme';
import { FlatList } from 'react-native-gesture-handler';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { createStackNavigator } from '@react-navigation/stack';
import { type RootStackParams } from '../../routes/StackNavigator'; //type : para decirle que lo trate como un tipo de dato




export type Product = {
  id : number,
  name : string
};

const products : Product[] = [
  {id: 1, name: 'Producto 1'},
  {id: 2, name: 'Producto 2'},
  {id: 3, name: 'Producto 3'},
  {id: 4, name: 'Producto 4'},
  {id: 5, name: 'Producto 5'},
];

export const ProductsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={ globalStyles.container }>
      <Text style={ { color:'#000' , marginBottom: 10, fontSize: 30 } }>Productos</Text>

      <FlatList
        data={ products }
        renderItem={ ( { item }  ) => (
          console.log(typeof(item)),
          <PrimaryButton
          onPress = { ()=> navigation.navigate( 'Product',{id: item.id, name: item.name} )}
            title={ item.name }
          />
        ) }
      />

      <Text style={ { color:'#000' , marginBottom: 10, fontSize: 30 } }>Ajustes</Text>
      <PrimaryButton
          onPress = { ()=> navigation.navigate( 'Settings' )}
            title="Ajustes"
          />
    </View>
  );
};
