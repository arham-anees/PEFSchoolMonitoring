import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { CheckBox, Button } from "react-native-elements";
import { updateSchool } from "../../../Services/Schools";
import { ScrollView } from "react-native-gesture-handler";

class School extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: this.props.route.params.school,
      editable: true,
      isMonitor: this.props.route.params.isMonitor,
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
    console.log("class is being added");
    if (Date.now() - this.state.lastOperation > 1000) {
      let school = { ...this.state.school };
      school.classes.push(newClass);
      this.setState({ school, lastOperation: Date.now() });
      this.props.navigation.navigate("ClassesList", {
        classes: this.state.school.classes,
        editable: this.state.editable,
        updateClass: this.updateClass,
        addClass: this.addClass,
      });
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
    //save report

    if (Date.now() - this.state.lastOperation > 1000) {
      this.setState({ lastOperation: Date.now() });
      updateSchool(school)
        .then((res) => {
          alert("Report Saved successfully");
          this.setState({ editable: !this.state.editable });
        })
        .catch((err) => {
          console.log(err);
          alert("Failed to save report. please try again later");
        });
      console.log(school);
    }
  };

  toggleIsOvercrowded = () => {
    if (this.state.editable) {
      this.state.school.isOvercrowded = !this.state.school.isOvercrowded;
      if (!this.state.school.isOvercrowded) this.state.school.rating += 1;
      else this.state.school.rating -= 1;
      this.setState(this.state.school);
    }
  };
  toggleIsCongested = () => {
    if (this.state.editable) {
      this.state.school.isCongested = !this.state.school.isCongested;
      if (!this.state.school.isCongested) this.state.school.rating += 1;
      else this.state.school.rating -= 1;
      this.setState(this.state.school);
    }
  };
  toggleIsLightArtificial = () => {
    if (this.state.editable) {
      this.state.school.isLightArtificial = !this.state.school
        .isLightArtificial;
      if (this.state.school.isLightArtificial) this.state.school.rating += 1;
      else this.state.school.rating -= 1;
      this.setState(this.state.school);
    }
  };
  toggleIsPlasteringRequired = () => {
    if (this.state.editable) {
      this.state.school.isPlasteringRequired = !this.state.school
        .isPlasteringRequired;
      if (!this.state.school.isPlasteringRequired)
        this.state.school.rating += 1;
      else this.state.school.rating -= 1;
      this.setState(this.state.school);
    }
  };

  toggleIsRoomsConditionProper = () => {
    if (this.state.editable) {
      this.state.school.isRoomsConditionProper = !this.state.school
        .isRoomsConditionProper;
      if (this.state.school.isRoomsConditionProper)
        this.state.school.rating += 1;
      else this.state.school.rating -= 1;
      this.setState(this.state.school);
    }
  };
  toggleIsStudentCharged = () => {
    if (this.state.editable) {
      this.state.school.isStudentCharged = !this.state.school.isStudentCharged;
      if (!this.state.school.isStudentCharged) this.state.school.rating += 1;
      else this.state.school.rating -= 1;
      this.setState(this.state.school);
    }
  };

  toggleIsFurnitureProper = () => {
    if (this.state.editable) {
      this.state.school.isFurnitureProper = !this.state.school
        .isFurnitureProper;
      if (this.state.school.isFurnitureProper) this.state.school.rating += 1;
      else this.state.school.rating -= 1;
      this.setState(this.state.school);
    }
  };

  toggleAreTeachersPaid = () => {
    if (this.state.editable) {
      this.state.school.areTeachersPaid = !this.state.school.areTeachersPaid;
      if (this.state.school.areTeachersPaid) this.state.school.rating += 1;
      else this.state.school.rating -= 1;
      this.setState(this.state.school);
    }
  };

  toggleAreRoomsVentilated = () => {
    if (this.state.editable) {
      this.state.school.areRoomsVentilated = !this.state.school
        .areRoomsVentilated;
      if (this.state.school.areRoomsVentilated) this.state.school.rating += 1;
      else this.state.school.rating -= 1;
      this.setState(this.state.school);
    }
  };

  render() {
    console.log(this.state.school.rating);
    return (
      <View>
        <ScrollView style={{ marginBottom: 50 }}>
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
              editable={this.state.editable}
              value={
                this.state.school.noOfWritingBoards === -1
                  ? ""
                  : this.state.school.noOfWritingBoards.toString()
              }
              onChangeText={(text) => {
                text === ""
                  ? (this.state.school.noOfWritingBoards = -1)
                  : (this.state.school.noOfWritingBoards = parseInt(text));
                this.setState({ school: this.state.school });
              }}
            />
          </View>
          <View style={[styles.wrapper, styles.inputWrapper]}>
            <Text style={styles.inputLabel}>No of Proper Fans</Text>
            <TextInput
              style={styles.textInput}
              keyboardType={"number-pad"}
              editable={this.state.editable}
              value={
                this.state.school.noOfProperFans === -1
                  ? ""
                  : this.state.school.noOfProperFans.toString()
              }
              onChangeText={(text) => {
                text === ""
                  ? (this.state.school.noOfProperFans = -1)
                  : (this.state.school.noOfProperFans = parseInt(text));
                this.setState({ school: this.state.school });
              }}
            />
          </View>
          <View style={[styles.wrapper, styles.inputWrapper]}>
            <Text style={styles.inputLabel}>No of Teacher Chairs</Text>
            <TextInput
              style={styles.textInput}
              keyboardType={"number-pad"}
              editable={this.state.editable}
              value={
                this.state.school.noOfTeacherChairs === -1
                  ? ""
                  : this.state.school.noOfTeacherChairs.toString()
              }
              onChangeText={(text) => {
                text === ""
                  ? (this.state.school.noOfTeacherChairs = -1)
                  : (this.state.school.noOfTeacherChairs = parseInt(text));
                this.setState({ school: this.state.school });
              }}
            />
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <Button
              title={"Classes"}
              type={"outline"}
              containerStyle={styles.marginTop10}
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
              containerStyle={styles.marginTop10}
            />
            {this.state.isMonitor ? (
              <Button
                title={this.state.editable ? "Save Report" : "Start Monitoring"}
                type={"solid"}
                onPress={() =>
                  this.state.editable
                    ? this.handleClick(this.state.school)
                    : this.setState({ editable: !this.state.editable })
                }
                containerStyle={{ marginTop: 10, marginBottom: 20 }}
              />
            ) : null}
          </View>
        </ScrollView>
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
  marginTop10: { marginTop: 10 },
});
