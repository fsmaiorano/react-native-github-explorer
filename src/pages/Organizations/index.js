import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import Header from "../../components/Header";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

class Organizations extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Organizations" />
      </View>
    );
  }
}

// Tab Icon
const TabIcon = ({ tintColor }) => (
  <Icon name="building" size={20} color={tintColor} />
);

TabIcon.prototype = {
  tintColor: PropTypes.string.isRequired
};

Organizations.navigationOptions = {
  tabBarIcon: TabIcon
};

export default Organizations;
