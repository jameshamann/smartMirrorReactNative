import React, { Component } from 'react';
import { Button, Footer, Title, Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
export default class SideBar extends Component {
  render() {
    return (
          <Content style={{backgroundColor: 'white'}}>
          <Header>
          <Body>
            <Title>Welcome, James</Title>
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
                  <Icon name="log-out" />
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
