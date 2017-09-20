import React from "react";
import { AppRegistry, Alert } from "react-native";
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Center, Right, Icon, Button, Text } from "native-base";
import { StackNavigator } from "react-navigation";
import PushNotificationController from "./PushNotificationController";
import PushNotification from 'react-native-push-notification';

// Library used for Notification
// https://github.com/zo0r/react-native-push-notification

export default class Notification extends React.Component {
    sendNotification(  ) {
        PushNotification.localNotificationSchedule({
            message: "Bonjour, ceci est une notification..",
            color: "red",
            date: new Date( Date.now() + ( 10 * 1000 ) )
        });
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Text>Notification ?</Text>
                        </CardItem>
                    </Card>
                    <Button full primary
                        style={{ marginTop: 10 }} onPress={this.sendNotification()} >
                        <Text> Je veux une notification </Text>
                    </Button>
                    <Text> Une notification vous sera envoyé dans 10 secondes ( une fois que vous aurez quittez l'application ) </Text>
                </Content>
                <PushNotificationController />
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
