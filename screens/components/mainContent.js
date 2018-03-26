import React, { Component } from 'react';
import { Input, Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right, Form, Item } from 'native-base';
import { Button } from 'react-native';
import { API } from 'aws-amplify-react-native';


export default class MainContent extends Component {

  Amplify.configure({
    API: {
        endpoints: [
            {
                name: "SmartMirrorMessageTopic_1",
                endpoint: "https://azjo7hto1k82k.iot.eu-west-2.amazonaws.com/topics/topic_1?q=1",
                service: "iotdata",
                region: "eu-west-2"
            }
        ]
    }

constructor(props) {
   super(props);
   this.state = { text: '' };

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  console.log(this)
  var results;
  var self = this;
  console.log(self);
  fetch('https://azjo7hto1k82k.iot.eu-west-2.amazonaws.com/topics/topic_1?q=1', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: 'Hello from React Native!',
    }),
  }).then(function(res){
    return res.json().then(function(json){
      console.log(json)
    })
  })
  event.preventDefault();
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
