/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import globalStyle from './globalStyle';
import NavigationController from './src/routers';
const App=()=>{
 return(
   <PaperProvider>
       <NavigationController/>
       </PaperProvider>
    )
 }

export default App;
