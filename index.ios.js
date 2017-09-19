/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import App from './App/App';
import {
    AppRegistry,
} from 'react-native';

export default class AwesomeCegqProjet extends Component {
  render() {
    return (
        <App />
    );
  }
}


AppRegistry.registerComponent('AwesomeCegqProjet', () => AwesomeCegqProjet);
