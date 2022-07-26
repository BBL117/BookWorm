import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

export default class LoadingScreen extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate("HomeScreen");
      } else {
        this.props.navigation.navigate("LoginScreen");
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center"
  }
});