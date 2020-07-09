import React from "react";
import { firebaseAuth } from "../Services/FirebaseConfig";
import { View, Text } from "react-native";
import { GetRole } from "../Services/Auth";

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let userRole;
    firebaseAuth.onAuthStateChanged((user) => {
      console.log("navigating", user);
      GetRole(user.email)
        .then((role) => {
          console.log(role);
          userRole = role;
          this.props.navigation.navigate(
            role ? (role === "admin" ? "AdminHome" : "MonitorHome") : "Login"
          );
        })
        .catch((err) => {
          this.setState({ error: err });
        });
    });
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
