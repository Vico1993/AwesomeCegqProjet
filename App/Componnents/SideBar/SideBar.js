import React, { Component } from 'react';
import {
  Linking,
  Text,
  View
} from 'react-native';
import {
    Container,
    Icon,
    List,
    ListItem
} from 'native-base'

import styles from './Styles'
import SideBarItem from './SideBarItem'

const routes = [
    {
        'route' : "Home",
        'name'  : "Accueil",
        'desc'  : "Retour au début de l'application",
    },
    {
        'route' : "Camera",
        'name'  : "CameraView",
        'desc'  : "Aller prendre une photo",
    },
];

export default class SideBar extends Component {
    render( ) {
        var rows = [];
        routes.forEach(function(elm) {
            rows.push(
                <SideBarItem route={elm.route} itemName={elm.name} itemDesc={elm.desc} press={() => this.props.navigation.navigate( elm.route )} />
            );
        }.bind( this ));
        return (
            <Container style={{
                backgroundColor: '#2E3235',
            }}>
                    <View style={styles.sideNavWrap}>
                        <Text style={styles.appName}>Journal de Chantier Mobile</Text>
                        <View style={styles.hariboteWrap}>
                            {rows}
                        </View>
                    </View>

                    <View style={styles.bottomLink}>
                        <Text onPress={() => Linking.openURL('http://www.cegq.com/')} style={styles.bottomLinkWord}>
                            <Icon style={{fontSize: 16,  color: '#89888d'}} name='link'/> Application développé par la CEGQ
                        </Text>
                    </View>

            </Container>
        )
    }
}
