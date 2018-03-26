import React, { Component } from 'react';
import { Input, Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right, Form, Item } from 'native-base';
import { Button } from 'react-native';
import Amplify, { API } from 'aws-amplify';




export default class MainContent extends Component {


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
let apiName = 'sampleCloudApi'; // replace this with your api name.
let path = '/items'; //replace this with the path you have configured on your API
let myInit = {
    body: {'topic_1': 'hello from react native'}, // replace this with attributes you need
}

API.post(apiName, path, myInit).then(response => {
  return response
}).then(function(response) {
  console.log(response)
});

  console.log(this)
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
