import React from "react";
import {View,Text,SafeAreaView} from 'react-native';
import homeStyle from './homeStyle';
const HomeScreen=()=>{
    return(
        <SafeAreaView style={homeStyle.safeArea}>
<View style={homeStyle.container}>
    <Text>{"Home World"}</Text>
</View>
        </SafeAreaView>
    )
}

export default HomeScreen;