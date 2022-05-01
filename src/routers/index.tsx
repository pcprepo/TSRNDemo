import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppStack';
const NavigationController=()=>{
    return(
        <NavigationContainer>
<AppNavigator/>
        </NavigationContainer>
    )
}

export default NavigationController;