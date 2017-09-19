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

// export default class AwesomeCegqProjet extends Component {
//   render() {
//     return (
//         <App />
//     );
//   }
// }


// import Expo from "expo";
import HomeScreen from "./App/View/HomeScreen/index.js";
export default class AwesomeCegqProjet extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    // await Expo.Font.loadAsync({
    //   Roboto: require("native-base/Fonts/Roboto.ttf"),
    //   Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    //   Ionicons: require("native-base/Fonts/Ionicons.ttf")
    // });
    this.setState({ isReady: true });
  }
  render() {
    // if (!this.state.isReady) {
    //   return <Expo.AppLoading />;
    // }
    return <HomeScreen />;
  }
}

AppRegistry.registerComponent('AwesomeCegqProjet', () => AwesomeCegqProjet);
