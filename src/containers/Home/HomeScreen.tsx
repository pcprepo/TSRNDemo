import React from "react";
import {View,Text,SafeAreaView, Alert} from 'react-native';
import homeStyle from './homeStyle';
import SearchBar from '../../components/SearchBar/SearchBar';
const HomeScreen=()=>{

    const parentFunc=()=>{
        Alert.alert("Parent","Parent function called from child");
    }
    return(
        <SafeAreaView style={homeStyle.safeArea}>
<View style={homeStyle.container}>
    <Text>{"Home World"}</Text>
    <SearchBar title={"Hi"} subTitle={"Subtitle"} okPress={()=>parentFunc()}/>
</View>

        </SafeAreaView>
    )
}

export default HomeScreen;