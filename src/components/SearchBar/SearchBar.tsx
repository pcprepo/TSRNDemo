import React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {View,Alert} from 'react-native';
interface searchProps {
title : string;
subTitle:string;
okPress :()=>void;
}
const SearchBar=({title,subTitle,okPress}:searchProps)=>{
  const cancelAlert=()=>{
      Alert.alert("Cancel","Cancel clicke");
  }  
    return(
        <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" />
    <Card.Content>
      <Title>{title}</Title>
      <Paragraph>{subTitle}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button onPress={()=>cancelAlert()}>Cancel</Button>
      <Button onPress={()=>okPress()}>Ok</Button>
    </Card.Actions>
  </Card>
    )
}

export default SearchBar;