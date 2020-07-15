import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { GetProfiles } from "../../Services/Profile";

class AssignRoleDetail extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.justifyBetween}>
          <Text style={Styles.label}>Name</Text>
          <Text style={Styles.value}>Obaid</Text>
        </View>
        <View style={Styles.justifyBetween}>
          <Text style={Styles.label}>Email</Text>
          <Text style={Styles.value}>Obaid</Text>
        </View>
        <View style={Styles.justifyBetween}>
          <Text style={Styles.label}>Address</Text>
          <Text style={Styles.value}>
            Mohalla Babakhel, District and tehsil Swabi, pakhtunkhwa
          </Text>
        </View>
        <View style={Styles.justifyBetween}>
          <Text style={Styles.label}>Role</Text>
          <Text style={Styles.value}>Obaid</Text>
        </View>
        <View style={Styles.justifyBetween}>
          <Button
            title="Reject"
            type="outline"
            buttonStyle={{ width: "90%" }}
          />
          <Button title="Approve" buttonStyle={{ width: "90%" }} />
        </View>
      </View>
    );
  }
}

export default AssignRoleDetail;

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  justifyBetween: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 20,
  },
  label: {
    minWidth: "30%",
  },
  value: {
    width: "70%",
  },
});
