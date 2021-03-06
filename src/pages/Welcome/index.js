import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import { getUser } from "../../services/github";
import styles from "./styles";

class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    })
  };

  state = {
    username: "",
    isLoading: false,
    error: false
  };

  componentDidMount() {
    this.setState({ error: false });
  }

  signIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;
    try {
      this.setState({ isLoading: true });
      const user = await getUser(username);
      if (user) {
        await AsyncStorage.setItem("@GithubExplorer:username", username);
        await AsyncStorage.setItem(
          "@GithubExplorer:user",
          JSON.stringify(user.data)
        );
        navigation.navigate("Main", { name: username });
        this.setState({ isLoading: false, username: "" });
      }
    } catch (err) {
      this.setState({ error: true });
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { username, isLoading, error } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Github Explorer</Text>
        <Text style={styles.text}>Explore any profile on Github</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Github Username"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.signIn}
            disabled={username === ""}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Explore</Text>
            )}
          </TouchableOpacity>
          {error && <Text style={styles.error}>User not found!</Text>}
        </View>
      </View>
    );
  }
}

export default Welcome;
