import React, { Component } from 'react';
import {
  Linking,
  Text,
  View
} from 'react-native';
import {
    Container,
    Icon
} from 'native-base'

import FontAwesome, { Icons } from 'react-native-fontawesome'
import styles from './Styles'

export default class SideBar extends Component {
    render( ) {
        return (
            <Container style={{
                backgroundColor: '#2E3235',
            }}>
                    <View style={styles.sideNavWrap}>
                        <Text style={styles.appName}>Journal de Chantier Mobile</Text>
                        <View style={styles.hariboteWrap}>
                            <Text style={styles.noteHaribote}>Prendre Une photo</Text>
                            <Text style={styles.hariboteDesc}>Test pour essayer de prendre des photos</Text>
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
