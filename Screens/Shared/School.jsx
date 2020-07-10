import React from "react";
import { Text } from "react-native";

function School(props) {
  return <Text>{props.route.params.name}</Text>;
}

export default School;
