import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
    Header,
    Title,
    Button,
    Left,
    Body,
    Icon
} from 'native-base'

export default class JournalHeader extends Component {
    render( ) {
        return (
            <Header>
                <Left style={styles.leftButton}>
                    <Button transparent >
                        <Icon ios='ios-menu' android="md-menu"/>
                    </Button>
                </Left>
                <Body>
                    <Title style={styles.titleApp}> {this.props.title} </Title>
                </Body>
            </Header>
        )
    }
}

const styles = StyleSheet.create({
    titleApp: {
        fontSize: 20,
        fontWeight: '300',
    },
    leftButton: {
        flex: 0
    }
});
