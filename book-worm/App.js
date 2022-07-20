import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./screens/loginScreen";
import LoadingScreen from "./screens/loadingScreen";
import firebase from 'firebase'

const AppSwitchNavigator = createSwitchNavigator({
  LoginScreen: LoginScreen,
  LoadingScreen: LoadingScreen,
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

export default function App() {
  return (
    <AppNavigator />
  )
}