import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { CheckBox, Button } from "react-native-elements";
import { updateSchool } from "../../Services/Schools";
import { app } from "firebase";

class School extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: this.props.route.params.school,
      editable: this.props.route.params.editable,
      lastOperation: Date.now(), //this is to prevent double call
    };
  }

  updateClass = (_class) => {
    let classes = [...this.state.school.classes];
    for (let i in classes) {
      if (
        classes[i].grade === _class.grade &&
        classes[i].section === _class.section
      ) {
        classes[i] = _class;
        break;
      }
    }
    let school = { ...school };
    school.classes = classes;
    this.setState(school);
  };

  addClass = (newClass) => {
    if (Date.now() - this.state.lastOperation > 1000) {
      let school = { ...this.state.school };
      school.classes.push(newClass);
      this.setState({ school, lastOperation: Date.now() });
      return true;
    } else console.log("this is double  call");
    return false;
  };

  updateTeacher = (teacher) => {
    let teachers = [...this.state.school.teachers];
    for (let i in teachers) {
      if (teachers[i].cnic === teacher.cnic) {
        teachers[i] = teacher;
        break;
      }
    }
    let school = { ...this.state.school };
    school.teachers = teachers;
    this.setState(school);
  };

  handleClick = (school) => {
    //submit report

    if (Date.now() - this.state.lastOperation > 1000) {
      this.setState({ lastOperation: Date.now() });
      updateSchool(school)
        .then((res) => {
          alert("Report submitted successfully");
        })
        .catch((err) =>
          alert("Failed to submit report. please try again later")
        );
      console.log(school);
    }
  };

  toggleIsOvercrowded = () => {
    this.state.school.isOvercrowded = !this.state.school.isOvercrowded;
    this.setState(this.state.school);
  };
  toggleIsCongested = () => {
    this.state.school.isCongested = !this.state.school.isCongested;
    this.setState(this.state.school);
  };
  toggleIsLightArtificial = () => {
    this.state.school.isLightArtificial = !this.state.school.isLightArtificial;
    this.setState(this.state.school);
  };
  toggleIsPlasteringRequired = () => {
    this.state.school.isPlasteringRequired = !this.state.school
      .isPlasteringRequired;
    this.setState(this.state.school);
  };

  toggleIsRoomsConditionProper = () => {
    this.state.school.isRoomsConditionProper = !this.state.school
      .isRoomsConditionProper;
    this.setState(this.state.school);
  };
  toggleIsStudentCharged = () => {
    this.state.school.isStudentCharged = !this.state.school.isStudentCharged;
    this.setState(this.state.school);
  };

  toggleIsFurnitureProper = () => {
    this.state.school.isFurnitureProper = !this.state.school.isFurnitureProper;
    this.setState(this.state.school);
  };

  toggleAreTeachersPaid = () => {
    this.state.school.areTeachersPaid = !this.state.school.areTeachersPaid;
    this.setState(this.state.school);
  };

  toggleAreRoomsVentilated = () => {
    this.state.school.areRoomsVentilated = !this.state.school
      .areRoomsVentilated;
    this.setState(this.state.school);
  };

  render() {
    return (
      <View>
        <CheckBox
          title="Overcrowded"
          checked={this.state.school.isOvercrowded}
          iconRight={true}
          wrapperStyle={styles.wrapper}
          onPress={this.toggleIsOvercrowded}
        />
        <CheckBox
          title="Congested"
          checked={this.state.school.isCongested}
          iconRight={true}
          wrapperStyle={styles.wrapper}
          onPress={() => this.toggleIsCongested()}
        />
        <CheckBox
          title="Artificial Light"
          checked={this.state.school.isLightArtificial}
          iconRight={true}
          wrapperStyle={styles.wrapper}
          onPress={() => this.toggleIsLightArtificial()}
        />
        <CheckBox
          title="Plaster Required"
          checked={this.state.school.isPlasteringRequired}
          iconRight={true}
          wrapperStyle={styles.wrapper}
          onPress={() => this.toggleIsPlasteringRequired()}
        />
        <CheckBox
          title="Proper Rooms Condition"
          checked={this.state.school.isRoomsConditionProper}
          iconRight={true}
          wrapperStyle={styles.wrapper}
          onPress={() => this.toggleIsRoomsConditionProper()}
        />
        <CheckBox
          title="Charging Students"
          checked={this.state.school.isStudentCharged}
          iconRight={true}
          wrapperStyle={styles.wrapper}
          onPress={() => this.toggleIsStudentCharged()}
        />
        <CheckBox
          title="Proper Furniture"
          checked={this.state.school.isFurnitureProper}
          iconRight={true}
          wrapperStyle={styles.wrapper}
          onPress={() => this.toggleIsFurnitureProper()}
        />
        <CheckBox
          title="Ventilated Rooms"
          checked={this.state.school.areRoomsVentilated}
          iconRight={true}
          wrapperStyle={styles.wrapper}
          onPress={() => this.toggleAreRoomsVentilated()}
        />
        <CheckBox
          title="Paid Teachers"
          checked={this.state.school.areTeachersPaid}
          iconRight={true}
          wrapperStyle={styles.wrapper}
          onPress={() => this.toggleAreTeachersPaid()}
        />

        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>No of Writing Boards</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.school.noOfWritingBoards.toString()}
            onChangeText={(text) => {
              this.state.school.noOfWritingBoards = parseInt(text);
              this.setState({ school: this.state.school });
            }}
          />
        </View>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>No of Proper Fans</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.school.noOfProperFans.toString()}
            onChangeText={(text) => {
              this.state.school.noOfProperFans = parseInt(text);
              this.setState({ school: this.state.school });
            }}
          />
        </View>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>No of Teacher Chairs</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.school.noOfTeacherChairs.toString()}
            onChangeText={(text) => {
              this.state.school.noOfTeacherChairs = parseInt(text);
              this.setState({ school: this.state.school });
            }}
          />
        </View>
        <Button
          title={"Classes"}
          type={"outline"}
          onPress={() =>
            this.props.navigation.navigate("ClassesList", {
              classes: this.state.school.classes,
              editable: this.state.editable,
              updateClass: this.updateClass,
              addClass: this.addClass,
            })
          }
        />
        <Button
          title={"Teachers"}
          type={"outline"}
          onPress={() =>
            this.props.navigation.navigate("TeachersList", {
              teachers: this.state.school.teachers,
              updateTeacher: this.updateTeacher,
              editable: this.state.editable,
            })
          }
          style={{ marginTop: 10 }}
        />
        <Button
          title={this.state.editable ? "Submit Report" : "Start Monitoring"}
          type={"solid"}
          onPress={() =>
            this.state.editable
              ? this.handleClick(this.state.school)
              : this.setState({ editable: true })
          }
          style={{ marginTop: 10 }}
        />
      </View>
    );
  }
}

export default School;

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  inputWrapper: {
    margin: 5,
    paddingHorizontal: 10,
  },
  inputLabel: {
    fontWeight: "bold",
  },
  textInput: {
    backgroundColor: "#fff",
    height: 40,
    borderColor: "gray",
    width: "50%",
    padding: 10,
  },
});
