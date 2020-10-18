import React from "react";
import { Text, View } from "react-native";
import { ListItem, Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

class TeachersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teachersList: this.props.route.params.teachers,
      editable: this.props.route.params.editable,
    };
  }

  addTeacher = (teacher) => {
    //conditions
    this.state.teachersList.push(teacher);
    this.setState(this.state.teachersList);
  };
  render() {
    return (
      <ScrollView style={{ marginHorizontal: 10 }}>
        {!this.state.teachersList != undefined ? (
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            No Teacher Added
          </Text>
        ) : (
          this.state.teachersList.map((teacher, i) => {
            return (
              <ListItem
                key={i}
                title={teacher.name}
                subtitle={teacher.designation}
                bottomDivider
                chevron
                onPress={() =>
                  this.props.navigation.navigate("Teacher", {
                    teacher,
                    editable: this.state.editable,
                    updateTeacher: this.props.route.params.updateTeacher,
                  })
                }
              />
            );
          })
        )}
        {this.state.editable ? (
          <Button
            title={"New Teacher"}
            style={{ marginTop: 10 }}
            onPress={() =>
              this.props.navigation.navigate("NewTeacher", {
                addTeacher: this.addTeacher,
              })
            }
          />
        ) : null}
      </ScrollView>
    );
  }
}

export default TeachersList;
