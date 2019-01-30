import React, { Component } from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";
import styles from "./styles";

class Repositories extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Repositories" />
      </View>
    );
  }
}

export default Repositories;
