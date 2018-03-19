import React, { Component } from 'react';
import { Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class MainContent extends Component {
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
                 <Button><Text>Common Functions</Text></Button>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent textStyle={{color: '#87838B'}}>

                 </Button>
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
                    <Button><Text>Submit!</Text></Button>
                  </Form>
                </Content>
              </Container>
           </Card>
        </Content>
    );
  }
}
