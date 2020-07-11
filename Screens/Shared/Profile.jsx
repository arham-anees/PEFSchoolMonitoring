import React, { useState } from "react";
import { View } from "react-native";
import { StyleSheet, Picker } from "react-native";
import { Input, Button } from "react-native-elements";

let handleClick = (name, phone, serviceNumber, role) => {
  console.log(name, phone, serviceNumber, role);
};

function Profile(props) {
  let [disable, setDisable] = useState(false);
  let [role, setRole] = useState();
  let [name, setName] = useState();
  let [phone, setPhone] = useState();
  let [serviceNumber, setServiceNumber] = useState();
  return (
    <View style={styles.container}>
      <Input
        placeholder="Name"
        disabled={disable}
        value={name}
        onChange={(value) => setName(value)}
      />
      <Input placeholder="Email" disabled={true} value={"email@e.mail"} />
      <Input
        placeholder="Phone Number"
        disabled={disable}
        value={phone}
        onChange={(value) => setPhone(value)}
      />
      <Input
        placeholder="Service Number"
        disabled={disable}
        value={serviceNumber}
        onChange={(value) => setServiceNumber(value)}
      />
      <Picker onValueChange={(value) => setRole(value)} selectedValue={role}>
        <Picker.Item label="Your Role" value="null" />
        <Picker.Item label="Admin" value="Admin" />
        <Picker.Item label="Monitor" value="Monitor" />
      </Picker>
      <Button
        title="Submit"
        style={styles.button}
        onPress={() => handleClick(name, phone, serviceNumber, role)}
      />
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    height: "100%",
    paddingTop: 20,
  },
  button: {
    marginTop: 10,
  },
});
