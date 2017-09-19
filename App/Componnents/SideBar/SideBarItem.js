import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from './Styles'

export default class SideBarItem extends Component {
    render( ) {
        return(
            <View style={styles.hariboteWrap}>
                <Text style={styles.noteHaribote} onPress={this.props.press}>{this.props.itemName}</Text>
                <Text style={styles.hariboteDesc}>{this.props.itemDesc}</Text>
            </View>
        )
    }
}
