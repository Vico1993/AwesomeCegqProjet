import React from "react";
import { AppRegistry, Alert } from "react-native";
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Center, Right, Icon, Button, Text } from "native-base";
import { StackNavigator } from "react-navigation";

export default class Notification extends React.Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Text>Notification ?</Text>
                        </CardItem>
                    </Card>
                <Button full rounded primary
                    style={{ marginTop: 10 }} >
                    <Text>Goto Button </Text>
                </Button>
                </Content>
            </Container>
        );
    }
}
Notification.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Notification</Title>
      </Body>
      <Right />
    </Header>
  )
});
