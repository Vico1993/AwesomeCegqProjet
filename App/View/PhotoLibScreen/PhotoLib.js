import React from "react";
import { AppRegistry, Alert } from "react-native";
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text } from "native-base";
import { StackNavigator } from "react-navigation";

// Librairie utilisé
// https://github.com/react-community/react-native-image-picker

export default class PhotoLib extends React.Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Text>Photo Librairie..</Text>
                        </CardItem>
                    </Card>
                    {/* <Button full primary
                        style={{ marginTop: 10 }} onPress={this.sendNotification()} >
                        <Text> Je veux une notification </Text>
                    </Button> */}
                </Content>
            </Container>
        );
    }
}
PhotoLib.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>PhotoLib</Title>
      </Body>
      <Right />
    </Header>
  )
});
