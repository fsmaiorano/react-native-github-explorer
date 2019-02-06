import React, { Component } from "react";
import { View, Text, TouchableOpacity, AsyncStorage } from "react-native";
import styles from "./styles";
import { getUser } from "../../services/github";
import Header from "../../components/Header";
class Profile extends Component {
  state = {
    user: undefined,
    username: undefined
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    const username = await AsyncStorage.getItem("@GithubExplorer:username");
    const user = await getUser(username);
    this.setState({ user: user, username: username });
  };

  goToDetails = () => {
    const { username } = this.state;
    const { navigation } = this.props;
    navigation.navigate("User", { name: username });
  };

  render() {
    const { user } = this.state;
    return (
      <View style={styles.container}>
        {/* <Header title="Profile" /> */}
        <TouchableOpacity onPress={this.goToDetails}>
          <Text>More</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Profile;
