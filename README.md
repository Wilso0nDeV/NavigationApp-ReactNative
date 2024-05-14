# React Navigation 

[ Pagina de librería ](https://reactnavigation.org/docs/getting-started/)

- Es una librería para navegación en react native

## Instalación y Configuración de React Navigation 

``` bash
#librería
$ yarn add @react-navigation/native

#dependencias
$ yarn add react-native-screens react-native-safe-area-context

```
### Solo para IOS
``` bash
#IOS
$ npx pod-install ios
```

## Modificaciones


``` kotlin
//MainActivity.tk
package com.navigationapp
import android.os.Bundle;
...

class MainActivity: ReactActivity() {
  // ...
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }
  // ...
}
```

``` TypeScript
//App.tsx
import { NavigationContainer } from '@react-navigation/native';
import {Text, View} from 'react-native';

export const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>

  );
};

```


## Instalación y configuración de Stack Navigator 

> Instalando Stack

```bash
##Stack
$ yarn add @react-navigation/stack

##Librerías
$ yarn add react-native-gesture-handler

##Animaciones UIKit 
$ yarn add @react-native-masked-view/masked-view

##Pods -> *Si estas usando MAC*
npx pod-install ios
```
>Configurando Stack
```TypeScript
//App.tsx
import 'react-native-gesture-handler';

```

## Instalación y configuración de Drawer Navigator 

> Instalando Stack

```bash
##Stack
$ yarn add @react-navigation/drawer

##Librerías
$ yarn add react-native-gesture-handler react-native-reanimated

##Animaciones UIKit 
$ yarn add @react-native-masked-view/masked-view

##Pods -> *Si estas usando MAC*
npx pod-install ios
```
>Configurando Drawer
```TypeScript
//App.tsx
import 'react-native-gesture-handler';

```

>Reseteamos cache 
``` bash 
npx react-native start --resetCache
```
>Si tenemos problemas al levantar, importamos esos plugins y volvemos a resetar cache

```JavaScript
//En babel.config.js
 plugins:['react-native-reanimated/plugin']

```