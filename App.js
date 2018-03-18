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
import SideBar from './screens/components/sidebar'
import MainContent from './screens/components/mainContent'

import Login from './screens/login'
import Amplify from 'aws-amplify';
import { Auth } from 'aws-amplify';

import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

import { withAuthenticator } from 'aws-amplify-react-native';
import { Authenticator } from 'aws-amplify-react-native'


class App extends Component {


  closeDrawer = () => {
        this._drawer._root.close();

    }
    openDrawer = () => {
        this._drawer._root.open();

      }

    render() {
          return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={this.openDrawer.bind(this)}>
                          <Icon name='menu'/>
                        </Button>

                    </Left>
                    <Body>
                      <Title> Miri </Title>
                    </Body>
                <Right>
                <Button transparent onPress={this.closeDrawer.bind(this)}>
                    <Icon name='close'/>
                </Button>
                </Right>
                </Header>

                     <Drawer
                    ref={(ref) => { this._drawer = ref; }}
                    content={<SideBar navigator={this.navigator} />}
                    >
                    <MainContent />
                    </Drawer>
            </Container>

        );
      }
    }

class AppWithAuth extends Component {
  render() {
    return (
      <Authenticator>
        <App />
      </Authenticator>
    );
  }
}

export default AppWithAuth;
