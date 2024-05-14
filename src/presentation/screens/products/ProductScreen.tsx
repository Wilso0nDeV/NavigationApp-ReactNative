import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { Text, View } from "react-native"
import { RootStackParams } from '../../routes/StackNavigator';
import { globalStyles } from "../../theme/theme";
import { useEffect } from "react";


export const ProductScreen = () => {
  //*Obteniendo los parametros que envio desde mi  navigation.navigate
  const params = useRoute<RouteProp<RootStackParams,'Product'>>().params;
  const navigation = useNavigation();
  
  //*Aqui podemos remplazar el titulo del header con el param que viene desde products
  //*Se ejecutara una sola vez "[]"
  useEffect(()=>{
    navigation.setOptions({
      title : params.name
    })
  },[]);

  return (
    <View style={globalStyles.container}>
        <Text>Producto Screen</Text>
        <Text style={{
          fontSize:20,
          textAlign:'center',
          marginTop:20
        }}>

          {params.id} - {params.name}
        </Text>
    </View>
  )
}
