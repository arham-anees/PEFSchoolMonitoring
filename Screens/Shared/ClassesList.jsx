import React from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";

function ClassesList(props) {
  let classesList = props.route.params;
  console.log(classesList);
  return (
    <View>
      {classesList.map((_class, i) => {
        return (
          <ListItem
            key={i}
            title={"Class " + _class.grade}
            subtitle={"Section " + _class.section}
            bottomDivider
            chevron
            onPress={() =>
              props.navigation.navigate("Class", { class: _class })
            }
          />
        );
      })}
    </View>
  );
}
export default ClassesList;
