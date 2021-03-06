import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { useState } from "react";
import ActivityIndicatorModal from "../../Components/ActivityIndicatorModal";

function AssignRoleDetail(props) {
  let [show, setShow] = useState(false);
  console.log(props);
  return (
    <View style={Styles.container}>
      <View>
        <ActivityIndicatorModal show={show} />
      </View>
      <View style={Styles.justifyBetween}>
        <Text style={Styles.label}>Name</Text>
        <Text style={Styles.value}>{props.route.params.profile.name}</Text>
      </View>
      <View style={Styles.justifyBetween}>
        <Text style={Styles.label}>Email</Text>
        <Text style={Styles.value}>{props.route.params.profile.email}</Text>
      </View>
      <View style={Styles.justifyBetween}>
        <Text style={Styles.label}>Address</Text>
        <Text style={Styles.value}>{props.route.params.profile.address}</Text>
      </View>
      <View style={Styles.justifyBetween}>
        <Text style={Styles.label}>Role</Text>
        <Text style={Styles.value}>{props.route.params.profile.roleName}</Text>
      </View>
      <View style={Styles.justifyBetween}>
        <Text style={Styles.label}>Service Number</Text>
        <Text style={Styles.value}>
          {props.route.params.profile.serviceNumber}
        </Text>
      </View>
      <View style={Styles.justifyBetween}>
        <Text style={Styles.label}>CNIC</Text>
        <Text style={Styles.value}>{props.route.params.profile.cnic}</Text>
      </View>
      <View style={Styles.justifyBetween}>
        <Button
          title="Reject"
          type="outline"
          buttonStyle={{ width: 80 }}
          onPress={() => {
            setShow(true);
            props.route.params.reject(props.route.params.profile);
            setShow(false);
          }}
        />
        <Button
          title="Approve"
          buttonStyle={{ width: 80 }}
          onPress={() => {
            setShow(true);
            props.route.params.accept(props.route.params.profile);
            setShow(false);
          }}
        />
      </View>
    </View>
  );
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
    minWidth: "40%",
  },
  value: {
    width: "60%",
  },
});
