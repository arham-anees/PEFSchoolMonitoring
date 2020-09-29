import React from "react";
import { ActivityIndicator, View } from "react-native";
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
      <ScrollView style={{ marginBottom: 20 }}>
        {this.state.isLoading ? (
          <ActivityIndicator style={{ marginTop: 20 }} />
        ) : this.state.reports === null || this.state.reports.length === 0 ? (
          <Text h4>No report found</Text>
        ) : (
          <React.Fragment>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginHorizontal: 10,
                marginVertical: 20,
              }}
            >
              <Text> Pending reports</Text>
              <Text>
                {
                  this.state.reports.filter(
                    (x) => x.record.isSubmitted === undefined
                  ).length
                }
                /{this.state.reports.length}
              </Text>
            </View>
            {this.state.reports
              .sort((a, b) => {
                console.log(a.lastModifiedOn, b.lastModifiedOn);
                return -a.record.lastModifiedOn + b.record.lastModifiedOn;
              })
              .map((report) => (
                <React.Fragment key={report.id}>
                  <ListItem
                    title={report.record.name}
                    subtitle={new Date(
                      report.record.lastModifiedOn
                    ).toLocaleString()}
                    rightTitle={
                      report.record.isSubmitted ? "Submitted" : "Pending"
                    }
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
              ))}
          </React.Fragment>
        )}
      </ScrollView>
    );
  }
}

export default ReportsList;
