import React, { useState, useEffect } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { ListItem } from "react-native-elements";
import { getAllSchools } from "../../Services/Schools";

class SchoolsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { schools: null, editable: false };
  }
  componentDidMount() {
    getAllSchools()
      .then((res) => {
        console.log(res);
        this.setState({ schools: res });
      })
      .catch((err) => console.error("failed to get schools", err));
  }
  render() {
    return (
      <View>
        {this.state.schools === undefined || this.state.schools === null ? (
          <ActivityIndicator style={{ marginTop: 30 }} />
        ) : this.state.schools.length === 0 ? (
          <Text>No school record is found</Text>
        ) : (
          this.state.schools.map((item, i) => (
            <ListItem
              key={i}
              title={item.name}
              subtitle={Date(item.lastModifiedOn).toString().substr(0, 24)}
              bottomDivider
              chevron
              onPress={() =>
                this.props.navigation.navigate("School", {
                  school: item,
                  isMonitor: this.props.route.params.isMonitor,
                })
              }
            />
          ))
        )}
      </View>
    );
  }
}

export default SchoolsList;
