import { useEffect } from 'react';
import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {type NavigationProp, useNavigation} from '@react-navigation/native';
import { ProductScreen } from './../products/ProductScreen';
import { PrimaryButton } from '../../components';
import { type RootStackParams } from '../../routes/StackNavigator';



export const HomeScreen = () => {
  //*Usando useNavigation, tipado con TypeScript
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {

    navigation.setOptions({
      headerLeft: ()=>{
        <Pressable>
          <Text style={{color: '#000', left:'100px'}}>Menu</Text>
        </Pressable>
      }
    })
    
  }, [])
  
 
  return (
    <View style={globalStyles.container}>

      {/* <Text style={{color: '#000'}}>Home</Text> */}

      <PrimaryButton  onPress = { ()=> navigation.navigate('Products')}  title={'Ir a productos'}/>

      <PrimaryButton  onPress = { ()=> navigation.navigate( 'Settings')}  title={'Ir a settings'}/>

    </View>
  );
};
