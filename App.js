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

import { Drawer, Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import MainContent from './screens/components/drawer'
import SideBar from './screens/components/sidebar'

export default class App extends Component {
  constructor(props){
    super(props);
    }
  render() {
     closeDrawer = () => {
       this.drawer._root.close()
     };
     openDrawer = () => {
       this.drawer._root.open()
     };
    return (
      <Container>
          <MainContent />
          <Drawer
            ref={(ref) => { this.drawer = ref; }}
            content={<SideBar navigator={this.navigator} />}
            onClose={() => this.closeDrawer()} >
         </Drawer>
      </Container>
      );
  }
}
