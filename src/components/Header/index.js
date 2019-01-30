import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  AsyncStorage
} from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

import Icon from "react-native-vector-icons/FontAwesome";

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({ navigate: PropTypes.func })
  };

  signOut = async () => {
    const { navigation } = this.props;
    await AsyncStorage.clear();
    navigation.navigate("Welcome");
  };

  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.left} />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={this.signOut}>
          <Icon name="exchange" size={16} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Header);

//withNavigation is used when the component is not listed on routes.
//For this reason, we don't have 'navigation' in the props.
