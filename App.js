import { InitFirebase } from "./Services/Auth";
import React, { useEffect, useState } from "react";
import {} from "react-navigation";
import * as firebase from "firebase";
import Navigator from "./Helper/Stack";
import { BackHandler } from "react-native";

export default class App extends React.Component {
  componentDidMount() {}

  render() {
    return <Navigator />;
  }
}
