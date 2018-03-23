import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Button, Footer, Title, Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
export default class SideBar extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let name = this.props.userName
    console.log(this.props.userName)
    return (
          <Content style={{backgroundColor: 'white'}}>
          <Header>
          <Body>
            <Title>Welcome, {name}</Title>
          </Body>
          </Header>
            <List>
              <ListItem icon>
                <Left>
                  <Icon name="bug" />
                </Left>
                <Body>
                  <Text>Report an Issue</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="question" />
                </Left>
                <Body>
                  <Text>FAQs</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Button onClick={() => this.signOut()}><Icon name="log-out" /></Button>
                </Left>
                <Body>
                  <Text>Sign Out</Text>
                </Body>
                <Right>
                  <Text></Text>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </List>


          </Content>
    );
  }
}
