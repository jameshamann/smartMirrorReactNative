/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Navigator,
  NativeModules,
} from 'react-native';

import { Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


export default class App extends Component {
  render() {
    return (
      <Container>
      <Header>
       <Left>
         <Button transparent>
           <Icon name='menu' />
         </Button>
       </Left>
       <Body>
         <Title>Miri</Title>
       </Body>
       <Right />
     </Header>
         <Content>
           <Card style={{flex: 0}}>
             <CardItem>
               <Left>
                 <Thumbnail source={{uri: 'Image URL'}} />
                 <Body>
                   <Text>NativeBase</Text>
                   <Text note>April 15, 2016</Text>
                 </Body>
               </Left>
             </CardItem>
             <CardItem>
               <Body>
                 <Text>
                   //Your text here
                 </Text>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent textStyle={{color: '#87838B'}}>
                   <Icon name="logo-github" />
                   <Text>1,926 stars</Text>
                 </Button>
               </Left>
             </CardItem>
           </Card>
         </Content>
       </Container>
      );
  }
}
