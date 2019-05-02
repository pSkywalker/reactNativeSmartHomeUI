/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./comps/home";
import DetailScreen from "./comps/detailsScreen";
/*
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
*/
const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailScreen
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
  }
  );


const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component<Props> {
  render() {
    return <AppContainer/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
