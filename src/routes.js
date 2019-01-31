import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";
import Repositories from "./pages/Repositories";
import Organizations from "./pages/Organizations";

import { colors } from "./styles";

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        // Repositories,
        Profile,
        User: createBottomTabNavigator(
          {
            Repositories,
            Organizations
          },
          {
            tabBarOptions: {
              showIcon: true,
              showLabel: false,
              activeTintColor: colors.white,
              inactiveTintColor: colors.whiteTransparent,
              style: {
                backgroundColor: colors.secundary
              }
            }
          }
        )
      },
      { initialRouteName: userLogged ? "User" : "Welcome" }
    )
  );

export default Routes;
