import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Image,
  ActivityIndicator
} from "react-native";
import styles from "./styles";
class Profile extends Component {
  state = {
    user: undefined,
    username: undefined,
    isLoading: true
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    const username = await AsyncStorage.getItem("@GithubExplorer:username");
    const user = JSON.parse(await AsyncStorage.getItem("@GithubExplorer:user"));
    this.setState({ user: user, username: username, isLoading: false });
  };

  goToDetails = () => {
    const { username } = this.state;
    const { navigation } = this.props;
    navigation.navigate("User", { name: username });
  };

  render() {
    const { user, isLoading } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          <View>
            <View style={styles.details}>
              <Image style={styles.avatar} source={{ uri: user.avatar_url }} />
              <View style={styles.user}>
                {user.name ? <Text>{user.name}</Text> : null}
                {user.email ? <Text>{user.email}</Text> : null}
                {user.blog ? <Text>{user.blog}</Text> : null}
                {user.location ? <Text>{user.location}</Text> : null}
              </View>
            </View>
            <Text style={styles.info}>{user.bio}</Text>
            <TouchableOpacity style={styles.button} onPress={this.goToDetails}>
              <Text style={styles.buttonText}>More details</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

export default Profile;
