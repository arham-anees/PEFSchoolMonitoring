import React, { useState } from "react";
import { View } from "react-native";
import { StyleSheet, Picker } from "react-native";
import { firebaseAuth } from "../../Services/FirebaseConfig";
import { Input, Button } from "react-native-elements";

import { SetOrUpdateProfile, GetProfile } from "../../Services/Profile";
import { ToastAndroid } from "react-native";

let handleClick = (name, email, phone, serviceNumber, role) => {
  try {
    SetOrUpdateProfile({
      name,
      email,
      phone,
      serviceNumber,
      role,
    })
      .then((response) => {
        console.log("response of creating another user", response);
        alert(
          "Profile is updated, please wait for approval from admin." +
            "\n You can update your profile until approved"
        );
      })
      .catch((err) => console.error("Error in handleClick", err));
  } catch (error) {
    console.error(error);
  }
};

function Profile(props) {
  let email = props.route.params;
  let [disable, setDisable] = useState(false);
  let [role, setRole] = useState();
  let [name, setName] = useState();
  let [phone, setPhone] = useState();
  let [serviceNumber, setServiceNumber] = useState();
  console.log(email);
  firebaseAuth.onAuthStateChanged((user) => {
    if (user !== null) {
      GetProfile(email)
        .then((_profile) => {
          console.log(_profile);
          setName(_profile.name);
          setRole(_profile.roleName);
          setPhone(_profile.phone);
          setServiceNumber(_profile.serviceNumber);
        })
        .catch((err) => {
          if (err != "null") console.error(err);
        });
    } else {
      props.navigation.navigate("Login");
    }
  });
  return (
    <View style={styles.container}>
      <Input
        placeholder="Name"
        value={name}
        onChange={(value) => setName(value.nativeEvent.text)}
      />
      <Input placeholder="Email" disabled={true} value={email} />
      <Input
        placeholder="Phone Number"
        value={phone}
        onChange={(value) => setPhone(value.nativeEvent.text)}
      />
      <Input
        placeholder="Service Number"
        value={serviceNumber}
        onChange={(value) => setServiceNumber(value.nativeEvent.text)}
      />
      <Picker onValueChange={(value) => setRole(value)} selectedValue={role}>
        <Picker.Item label="Your Role" value="null" />
        <Picker.Item label="Admin" value="Admin" />
        <Picker.Item label="Monitor" value="Monitor" />
      </Picker>
      <Button
        title="Submit"
        style={styles.button}
        onPress={() => handleClick(name, email, phone, serviceNumber, role)}
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