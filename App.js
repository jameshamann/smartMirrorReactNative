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
import { AmazonCognitoIdentity, CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';

import Login from './screens/login'
import Amplify from 'aws-amplify-react-native';
import aws_exports from './aws-exports';
import { withAuthenticator, API } from 'aws-amplify-react-native';
Amplify.configure(aws_exports);


class App extends Component {

  componentDidMount(){


  var poolData = { UserPoolId : 'eu-west-2_WE3gHDxq6',
        ClientId : '4tprh2pphe9gl93o4qh20scvtd'
    };
    var userPool = new CognitoUserPool(poolData);
    var cognitoUser = userPool.getCurrentUser();
    console.log(cognitoUser)
  }

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

export default withAuthenticator(App);
