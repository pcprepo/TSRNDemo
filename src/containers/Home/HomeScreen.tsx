import React from "react";
import {View,Text,SafeAreaView, Alert} from 'react-native';
import homeStyle from './homeStyle';
import SearchBar from '../../components/SearchBar/SearchBar';
const HomeScreen=()=>{
    return(
        <SafeAreaView style={homeStyle.safeArea}>
<View style={homeStyle.container}>
    <Text>{"Home World"}</Text>
    <SearchBar title={"Hi"} subTitle={"Subtitle"} okPress={()=>Alert.alert("Ok pressed")}/>
</View>

        </SafeAreaView>
    )
}

export default HomeScreen;