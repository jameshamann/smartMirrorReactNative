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

import { Label, Input, Form, Item, Drawer, Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class Login extends Component {



    render() {
        return (
          <Container>
           <Header>
            <Body>
              <Title>Sign In!</Title>
            </Body>
           </Header>
           <Content>
             <Form>
               <Item floatingLabel>
                 <Label>Username</Label>
                 <Input />
               </Item>
               <Item floatingLabel last>
                 <Label>Password</Label>
                 <Input />
               </Item>
               <Button style={{alignSelf:'center', padding: '10%'}}>
                <Text>Sign in</Text>
               </Button>
             </Form>
           </Content>
        </Container>
        );
      }
    }
