import React from "react";
import { firebaseAuth } from "../Services/FirebaseConfig";
import { View, Text } from "react-native";

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    firebaseAuth.onAuthStateChanged((user) => {
      console.log("navigating", user);
      this.props.navigation.navigate(user ? "Home" : "SignUp");
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
