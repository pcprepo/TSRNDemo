import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//Screens
import { AppScreens } from './AppScreens';
import HomeScreen from '../containers/Home/HomeScreen';

export type AppStackParams={
    Home : undefined; 
}

const AppStack=createStackNavigator<AppStackParams>();

const AppNavigator=()=>{
    return(
        <AppStack.Navigator screenOptions={{headerShown:false}} initialRouteName={AppScreens.Home}>
<AppStack.Screen name={AppScreens.Home} component={HomeScreen}></AppStack.Screen>
        </AppStack.Navigator>
    )
}

export default AppNavigator;