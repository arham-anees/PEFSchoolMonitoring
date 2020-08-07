import React from "react";
import { View, ActivityIndicator } from "react-native";
import { Text, ListItem, Divider } from "react-native-elements";
import { getAllReports } from "../../../Services/Reports";
import { ScrollView } from "react-native-gesture-handler";

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
      <ScrollView>
        {this.state.isLoading ? (
          <ActivityIndicator style={{ marginTop: 20 }} />
        ) : this.state.reports === null || this.state.reports.length === 0 ? (
          <Text h4>No report found</Text>
        ) : (
          this.state.reports.map((report) => (
            <React.Fragment>
              <ListItem
                key={report.id}
                title={report.record.name}
                subtitle={Date(report.record.lastModifiedOn)
                  .toLocaleString()
                  .substring(0, 24)}
                onPress={() =>
                  this.props.navigation.navigate("Report", {
                    report: report.record,
                    id: report.id,
                  })
                }
                containerStyle={{
                  backgroundColor: "white",
                }}
              />
              <Divider />
            </React.Fragment>
          ))
        )}
      </ScrollView>
    );
  }
}

export default ReportsList;
