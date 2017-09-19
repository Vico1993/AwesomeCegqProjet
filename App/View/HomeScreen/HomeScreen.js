import React from "react";
import { StatusBar, View } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import JournalHeader from './../../Componnents/JournalHeader/JournalHeader';
import styles from './Styles';
export default class HomeScreen extends React.Component {
    openDrawer( ) {
        this.props.navigation.navigate("DrawerOpen")
    }
    render() {
        return (
            <Container>
                <JournalHeader title="Journal de Chantier" press={this.openDrawer.bind( this )}/>
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
}
