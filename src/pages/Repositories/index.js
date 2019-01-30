import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import Header from "../../components/Header";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

class Repositories extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Repositories" />
      </View>
    );
  }
}

// Tab Icon
const TabIcon = ({ tintColor }) => (
  <Icon name="list-alt" size={20} color={tintColor} />
);

TabIcon.prototype = {
  tintColor: PropTypes.string.isRequired
};

Repositories.navigationOptions = {
  tabBarIcon: TabIcon
};

export default Repositories;
