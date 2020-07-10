import React from "react";
import { Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import School from "./School";

const Schools = [
  {
    name: "school 1",
    date: Date.now(),
  },
  {
    name: "school 2",
    date: Date.now(),
  },
  {
    name: "school 3",
    date: Date.now(),
  },
  {
    name: "school 4",
    date: Date.now(),
  },
  {
    name: "school 5",
    date: Date.now(),
  },
];

function SchoolsList(props) {
  return (
    <View>
      {Schools.map((item, i) => (
        <ListItem
          key={i}
          title={item.name}
          subtitle={Date(item.date).toString().substr(0, 24)}
          bottomDivider
          chevron
          onPress={() => props.navigation.navigate("School", item)}
        />
      ))}
    </View>
  );
}

export default SchoolsList;
