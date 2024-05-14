import { Pressable, Text } from "react-native"
import { globalStyles } from "../../theme/theme"


export interface ButtonNativation {
   onPress: ()=> void,
   title : string
}



export const PrimaryButton = ({onPress,  title } : ButtonNativation) => {
  return (
    <Pressable 
      style={globalStyles.primaryButton}
      onPress={onPress}
      
      >
        <Text style={globalStyles.buttonText}> {title}</Text>
      </Pressable>
  )
}
