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

import { Drawer, Container, Title, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import SideBar from './screens/components/sidebar'
import MainContent from './screens/components/mainContent'
import Connect from './screens/components/connect'

import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';

import Login from './screens/login'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator, API } from 'aws-amplify-react-native';
Amplify.configure(aws_exports);

import { Authenticator } from 'aws-amplify-react-native'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {userName: ''}

  }

  componentDidMount(){
    console.log("Before")
    console.log(this.props.authData.username)
  }

  closeDrawer = () => {
        this._drawer._root.close();

    }
    openDrawer = () => {
      this._drawer._root.open();
      console.log(this.state.userName)

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
                </Right>
                </Header>
                    <Drawer
                    ref={(ref) => { this._drawer = ref; }}
                    content={<SideBar navigator={this.navigator} userName={this.props.authData.username} />}
                    >
                    <MainContent userName={this.props.authData.username} />
                    </Drawer>
            </Container>

        );
      }
    }

export default withAuthenticator(App);
