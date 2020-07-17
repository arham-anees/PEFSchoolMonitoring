import React from "react";
import { View, ActivityIndicator } from "react-native";
import { Text, ListItem } from "react-native-elements";
import { getAllReports } from "../../../Services/Reports";

class ReportsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    getAllReports()
      .then((res) => this.setState({ reports: res, isLoading: false }))
      .catch((err) => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  }
  render() {
    return (
      <View>
        {this.state.isLoading ? (
          <ActivityIndicator style={{ marginTop: 20 }} />
        ) : this.state.reports === null || this.state.reports.length === 0 ? (
          <Text h4>No report found</Text>
        ) : (
          this.state.reports.map((report, i) => (
            <ListItem
              title={report.name}
              subtitle={Date(report.lastModifiedOn)
                .toLocaleString()
                .substring(0, 24)}
              onPress={() =>
                this.props.navigation.navigate("Report", {
                  report: report,
                })
              }
            />
          ))
        )}
      </View>
    );
  }
}

export default ReportsList;
