import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ActivityIndicator,
  AsyncStorage,
  FlatList
} from "react-native";
import OrganizationItem from "./OrganizationItem";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { getOrganizations } from "../../services/github";

class Organizations extends Component {
  state = {
    data: [],
    isLoading: true,
    isRefreshing: false
  };

  componentDidMount() {
    this.loadOrganizations();
  }

  loadOrganizations = async () => {
    try {
      this.setState({ isRefreshing: true });
      const username = await AsyncStorage.getItem("@GithubExplorer:username");
      const organizations = await getOrganizations(username);
      if (organizations) {
        this.setState({
          data: organizations,
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
      <View>
        {data.length > 0 ? (
          <FlatList
            data={data}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderListItem}
            onRefresh={this.loadOrganizations}
            refreshing={isRefreshing}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
          />
        ) : (
          <Text style={styles.text}>
            This user doesn't participate of any organization{" "}
            <Icon name="meh-o" size={20} />
          </Text>
        )}
      </View>
    );
  };

  renderListItem = ({ item }) => <OrganizationItem organization={item} />;

  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
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
