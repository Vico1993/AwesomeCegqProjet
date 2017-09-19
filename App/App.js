import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Center,
    Right,
    Body,
    Icon,
    Drawer,
    Card,
    CardItem,
} from 'native-base'

import FontAwesome, { Icons } from 'react-native-fontawesome'


export default class App extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left style={styles.leftButton}>
                        <Button transparent >
                            <Icon ios='ios-menu' android="md-menu"/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.titleApp}> Journal de Chantier de test </Title>
                    </Body>
                </Header>
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Bienvenue sur le TEST React-native
                    </Text>
                    <Text style={styles.instructions}>
                        To get started, edit index.ios.js
                    </Text>
                    <Text style={styles.instructions}>
                        Press Cmd+R to reload,{'\n'}
                        Cmd+D or shake for dev menu
                    </Text>
                </View>
            </Container>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    titleApp: {
        fontSize: 20,
        fontWeight: '300',
    },
    leftButton: {
        flex: 0
    }
});
