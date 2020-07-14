import React from "react";
import { firebaseAuth } from "../Services/FirebaseConfig";
import { View, Text, BackHandler } from "react-native";
import { GetRole } from "../Services/Auth";
import { app } from "firebase";

// https://expo.io/dashboard/arham-anees/builds/8d325784-b993-4269-865f-fd579b369a8f
// https://expo.io/artifacts/77fe230e-b5df-4523-8e9e-93b66cc48d9c
class Loading extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () =>
      BackHandler.exitApp()
    );

    let userRole;
    try {
      firebaseAuth.onAuthStateChanged((user) => {
        //console.log("navigating", user);
        if (user === null) this.props.navigation.navigate("Login");
        else {
          GetRole(user.email)
            .then((role) => {
              console.log(role);
              if (role == "null") {
                this.props.navigation.navigate("Profile", user.email);
              } else {
                userRole = role;
                this.props.navigation.navigate(
                  role
                    ? role === "Admin"
                      ? "AdminHome"
                      : "MonitorHome"
                    : "Login"
                );
              }
            })
            .catch((err) => {
              alert(
                "An error occurred while connecting to database. Please check your internet connection and try again later"
              );
              console.error("Error getting role", err);
            });
        }
      });
    } catch (err) {
      console.log("Error found");
    }
  }
  render() {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
}

export default Loading;
