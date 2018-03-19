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

import Aws from 'aws-sdk/dist/aws-sdk-react-native'
import AwsIot from 'aws-iot-device-sdk'

class App extends Component {

  componentDidMount(){
    Aws.config.region = AWS_REGION


    Aws.config.credentials.get(() => {
        const config = {}
        let client

        config.host = AWS_IOT_ENDPOINT
        config.protocol = 'wss'
        config.clientId = `client-${Math.floor((Math.random() * 100000) + 1)}`
        config.accessKeyId = Aws.config.credentials.accessKeyId
        config.secretKey = Aws.config.credentials.secretAccessKey
        config.sessionToken = Aws.config.credentials.sessionToken

        client = AwsIot.device(config)

        client.on('connect', () => {
            client.subscribe('some_topic')
        })

        client.on('message', (topic, message) => {
            console.log(topic, message)
        })

        client.on('error', error => {
            console.log(error)
        })
    })
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
