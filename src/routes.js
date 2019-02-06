import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import React from "react";

import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";
import Repositories from "./pages/Repositories";
import Organizations from "./pages/Organizations";

import HeaderRight from "./components/Header";

import { colors } from "./styles";

const Routes = (userLogged = false) =>
  createAppContainer(
    createStackNavigator({
      Welcome: {
        screen: Welcome,
        stackNavigatorConfig: {
          headerMode: "screen"
        },
        navigationOptions: ({ navigation }) => ({
          header: null
        })
      },
      Main: {
        screen: Profile,
        stackNavigatorConfig: {},
        navigationOptions: ({ navigation }) => ({
          title: `${navigation.state.params.name}'s Profile`,
          headerLeft: null,
          headerRight: <HeaderRight />
          // headerTintColor: "blue",
          // headerStyle: {
          //   backgroundColor: "red"
          // }
        })
      },
      User: {
        screen: createBottomTabNavigator({
          Repositories,
          Organizations
        }),
        navigationOptions: ({ navigation }) => ({
          // title: "Details",
          title: `${navigation.state.params.name}'s Profile`,
          // headerLeft: null,
          // headerBackTitle: "a"
          headerRight: <HeaderRight />
          // headerTintColor: "blue",
          // headerStyle: {
          //   backgroundColor: "red"
          // }
        })
      }
    }),
    { initialRouteName: userLogged ? "Profile" : "Welcome" }
  );

export default Routes;
