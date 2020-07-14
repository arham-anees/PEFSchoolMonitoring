import React from "react";
import { View } from "react-native";
import { ListItem, Button } from "react-native-elements";

function ClassesList(props) {
  let classesList = props.route.params.classes;
  let editable = props.route.params.editable;
  let updateClass = props.route.params.updateClass;
  let addClass = props.route.params.addClass;
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
              props.navigation.navigate("Class", {
                class: _class,
                editable,
                updateClass,
              })
            }
          />
        );
      })}
      {editable ? (
        <Button
          type={"solid"}
          title={"New Class"}
          onPress={() => props.navigation.navigate("NewClass", { addClass })}
        />
      ) : null}
    </View>
  );
}
export default ClassesList;
