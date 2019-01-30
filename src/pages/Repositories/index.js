import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  AsyncStorage,
  ActivityIndicator,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../../components/Header";
import styles from "./styles";
import { getRepositories } from "../../services/github";
import RepositoryItem from "./RepositoryItem";

class Repositories extends Component {
  state = {
    data: [],
    isLoading: true,
    isRefreshing: false
  };

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    try {
      this.setState({ isRefreshing: true });
      const username = await AsyncStorage.getItem("@GithubExplorer:username");
      const repositories = await getRepositories(username);
      if (repositories) {
        this.setState({
          data: repositories,
          isLoading: false,
          isRefreshing: false
        });
      }
    } catch (err) {
      console.tron.log("Error: ", err);
    }
  };

  renderList = () => {
    const { data, isRefreshing } = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={isRefreshing}
      />
    );
  };

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Repositories" />

        {isLoading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}

// Tab Icon
const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} />;

TabIcon.prototype = {
  tintColor: PropTypes.string.isRequired
};

Repositories.navigationOptions = {
  tabBarIcon: TabIcon
};

export default Repositories;
