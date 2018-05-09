import React, { Component } from 'react';
import { Input, Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right, Form, Item } from 'native-base';
import { Button } from 'react-native';
import Amplify, { API } from 'aws-amplify';
import AWS from 'aws-sdk/dist/aws-sdk-react-native'
import AwsIot from 'aws-iot-device-sdk'
import AWSIoTMQTT from 'react-native-aws-iot-device-shadows'
import { PubSub } from 'aws-amplify';
import { AWSIoTProvider } from 'aws-amplify/lib/PubSub/Providers';

export default class MainContent extends Component {

constructor(props) {
   super(props);
   this.state = { text: '' };

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);

}

async componentDidMount(){
  Amplify.addPluggable(new AWSIoTProvider({
     aws_pubsub_region: 'eu-west-2',
     aws_pubsub_endpoint: 'wss://azjo7hto1k82k.iot.eu-west-2.amazonaws.com/mqtt',
   }));
   PubSub.subscribe('myTopic').subscribe({
    next: data => console.log('Message received', data),
    error: error => console.error(error),
    close: () => console.log('Done'),
  });
}

handleChange(event) {
  this.setState({value: event.target.value});
}


handleSubmit(event) {
  console.log('clicked!')
  event.preventDefault();
  this.pubSub()
}

async pubSub(){
  Amplify.addPluggable(new AWSIoTProvider({
     aws_pubsub_region: 'eu-west-2',
     aws_pubsub_endpoint: 'wss://azjo7hto1k82k.iot.eu-west-2.amazonaws.com/mqtt',
   }));

  await PubSub.publish('myTopic', { msg: 'Hello to all subscribers!' });
}

  render() {
    return (
      <Content>
           <Card style={{flex: 0}}>
             <CardItem>
               <Left>
                 <Thumbnail source={{uri: 'Image URL'}} />
                 <Body>
                   <Text>Your Device Name</Text>
                   <Text note>Smart Mirror</Text>
                   <Text note>Turned on</Text>
                 </Body>
               </Left>
             </CardItem>
             <CardItem>
               <Body>
                 <Text>
                 </Text>
                 <Button
                  title="Common Functions"
                  />
               </Body>
             </CardItem>
             <CardItem>
               <Left>
               </Left>
             </CardItem>
             <CardItem>
             <Container>
                <Header />
                <Content>
                  <Form>
                    <Item>
                      <Input placeholder="Topic" />
                    </Item>
                    <Item last>
                      <Input placeholder="Message" />
                    </Item>
                    <Button
                      onPress={(event) => this.handleSubmit(event)}
                      title="Hello"
                      color="#841584"
                      accessibilityLabel="Learn more about this purple button"
                    />
                  </Form>
                </Content>

              </Container>
            </CardItem>
           </Card>
        </Content>
    );
  }
}
