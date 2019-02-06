import React, { Component, Fragment } from "react";
import { withNavigation } from "react-navigation";
import { TouchableOpacity, AsyncStorage } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

import Icon from "react-native-vector-icons/FontAwesome";

class Header extends Component {
  static propTypes = {
    navigation: PropTypes.shape({ navigate: PropTypes.func })
  };

  signOut = async () => {
    const { navigation } = this.props;
    await AsyncStorage.clear();
    navigation.navigate("Welcome");
  };

  render() {
    return (
      <TouchableOpacity style={styles.iconRight} onPress={this.signOut}>
        <Icon name="exchange" size={16} style={styles.icon} />
      </TouchableOpacity>
    );
  }
}

export default withNavigation(Header);

//withNavigation is used when the component is not listed on routes.
//For this reason, we don't have 'navigation' in the props.
