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

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


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
           <Title>Header</Title>
         </Body>
         <Right />
       </Header>
       <Content>
         <Text>
           This is Content Section
         </Text>
       </Content>
       <Footer>
         <FooterTab>
           <Button full>
             <Text>Footer</Text>
           </Button>
         </FooterTab>
       </Footer>
     </Container>
      );
  }
}
