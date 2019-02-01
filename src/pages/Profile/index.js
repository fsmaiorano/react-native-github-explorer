import React, { Component } from "react";
import { View, Text, TouchableOpacity, AsyncStorage } from "react-native";
import styles from "./styles";
import { getUser } from "../../services/github";

class Profile extends Component {
  state = {
    user: undefined
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    const username = await AsyncStorage.getItem("@GithubExplorer:username");
    const user = await getUser(username);
    debugger;
    this.setState({ user: user });
  };

  render() {
    const { user } = this.state;
    return (
      <View style={styles.container}>
        <Text>PROFILE</Text>
      </View>
    );
  }
}

export default Profile;
