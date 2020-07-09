import { InitFirebase } from "./Services/Auth";
import React, { useEffect, useState } from "react";
import {} from "react-navigation";
import * as firebase from "firebase";

import Navigator from "./Helper/Stack";
export default class App extends React.Component {
  componentDidMount() {
    setTimeout(null, 500);
  }

  render() {
    return <Navigator></Navigator>;
  }
}
