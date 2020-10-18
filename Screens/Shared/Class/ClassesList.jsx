import React, { useEffect } from "react";
import { Text } from "react-native";
import { ListItem, Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

function ClassesList(props) {
  let classesList = props.route.params.classes;
  let editable = props.route.params.editable;
  let updateClass = props.route.params.updateClass;
  let addClass = props.route.params.addClass;
  // let addClass = (newClass) => {
  //   console.log("class is being added");
  //   //if (Date.now() - this.state.lastOperation > 1000) {
  //   //let school = { ...this.state.school };
  //   classesList.push(newClass);
  //   //this.setState({ school, lastOperation: Date.now() });
  //   return true;
  //   //} else console.log("this is double  call");
  //   //return false;
  // };
  console.log(classesList);

  // useEffect(() => {
  //   console.log("effective");
  // });

  return (
    <ScrollView style={{ marginHorizontal: 10 }}>
      {classesList === undefined || classesList === null ? (
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          No class added
        </Text>
      ) : (
        classesList.map((_class, i) => {
          if (_class === null) return null;
          else
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
        })
      )}
      {editable ? (
        <Button
          type={"solid"}
          title={"New Class"}
          onPress={() => props.navigation.navigate("NewClass", { addClass })}
        />
      ) : null}
    </ScrollView>
  );
}
export default ClassesList;
