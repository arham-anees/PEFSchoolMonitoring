import React from "react";
import { Text, ActivityIndicator, ScrollView } from "react-native";
import { ListItem, Input } from "react-native-elements";
import { getAllSchools } from "../../../Services/Schools";

class SchoolsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { schools: null, editable: false, schoolId: 0 };
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
      <ScrollView>
        <Input
          label="School ID"
          keyboardType={"number-pad"}
          value={this.state.schoolId > 0 ? this.state.schoolId.toString() : ""}
          onChangeText={(text) => {
            text === ""
              ? this.setState({ schoolId: 0 })
              : this.setState({ schoolId: parseInt(text) });
          }}
        />

        {this.state.schools === undefined || this.state.schools === null ? (
          <ActivityIndicator style={{ marginTop: 30 }} />
        ) : this.state.schools.length === 0 ? (
          <Text>No school record is found</Text>
        ) : (
          this.state.schools.map((item, i) =>
            this.state.schoolId > 0 ? (
              item.id === this.state.schoolId ? (
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
              ) : null
            ) : (
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
            )
          )
        )}
      </ScrollView>
    );
  }
}

export default SchoolsList;
