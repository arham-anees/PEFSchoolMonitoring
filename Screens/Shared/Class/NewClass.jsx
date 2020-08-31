import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

class NewClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: {
        grade: 0,
        section: "",
        totalEnrollment: 0,
        activeStudents: 0,
        disabledStudents: 0,
        nonPefStudents: 0,
        unregisteredStudents: 0,
        dropoutStudents: 0,
        uniformlessStudents: 0,
        classroomCapacity: 0,
        noOfFurniture: 0,
      },
    };
  }

  addClass = () => {
    let s = this.state;
    if (parseInt(s.grade) > 0 && parseInt(s.grade) <= 10) {
      if (
        parseInt(s.totalEnrollment) ===
        parseInt(s.activeStudents) +
          parseInt(s.nonPefStudents) +
          parseInt(s.unregisteredStudents) +
          parseInt(s.dropoutStudents)
      ) {
        this.props.route.params.addClass(this.state.class)
          ? null //this.props.navigation.pop()
          : alert("Failed to add class");
      } else {
        alert(
          "Please consider the figures again. total enrolment does not match number of students"
        );
      }
    } else {
      alert("Please insert Valid grade");
    }
  };

  render() {
    let _class = this.state.class;
    return (
      <ScrollView style={styles.container}>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Grade</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={_class.grade.toString()}
            editable={this.state.editable}
            onChangeText={(text) => {
              text == ""
                ? (_class.grade = "")
                : (this.state.class.grade = parseInt(text));
              this.setState(this.state.class);
            }}
          />
        </View>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Section</Text>
          <TextInput
            style={styles.textInput}
            value={this.state.class.section}
            editable={this.state.editable}
            onChangeText={(text) => {
              text == ""
                ? (_class.section = "")
                : (this.state.class.section = text);
              this.setState(this.state.class);
            }}
          />
        </View>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Total Enrollments</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.class.totalEnrollment.toString()}
            editable={this.state.editable}
            onChangeText={(text) => {
              text == ""
                ? (_class.totalEnrollment = "")
                : (this.state.class.totalEnrollment = parseInt(text));
              this.setState(this.state.class);
            }}
          />
        </View>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Active Students</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.class.activeStudents.toString()}
            editable={this.state.editable}
            onChangeText={(text) => {
              text == ""
                ? (_class.activeStudents = "")
                : (this.state.class.activeStudents = parseInt(text));
              this.setState(this.state.class);
            }}
          />
        </View>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Disabled Students</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.class.disabledStudents.toString()}
            editable={this.state.editable}
            onChangeText={(text) => {
              text == ""
                ? (_class.disabledStudents = "")
                : (this.state.class.disabledStudents = parseInt(text));
              this.setState(this.state.class);
            }}
          />
        </View>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Non-PEF Students</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.class.nonPefStudents.toString()}
            editable={this.state.editable}
            onChangeText={(text) => {
              text == ""
                ? (_class.nonPefStudents = "")
                : (this.state.class.nonPefStudents = parseInt(text));
              this.setState(this.state.class);
            }}
          />
        </View>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Unregistered Students</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.class.unregisteredStudents.toString()}
            editable={this.state.editable}
            onChangeText={(text) => {
              text == ""
                ? (_class.unregisteredStudents = "")
                : (this.state.class.unregisteredStudents = parseInt(text));
              this.setState(this.state.class);
            }}
          />
        </View>

        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Dropout Students</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.class.dropoutStudents.toString()}
            editable={this.state.editable}
            onChangeText={(text) => {
              text == ""
                ? (_class.dropoutStudents = "")
                : (this.state.class.dropoutStudents = parseInt(text));
              this.setState(this.state.class);
            }}
          />
        </View>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Students with no Uniform</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.class.uniformlessStudents.toString()}
            editable={this.state.editable}
            onChangeText={(text) => {
              text == ""
                ? (_class.uniformlessStudents = "")
                : (this.state.class.uniformlessStudents = parseInt(text));
              this.setState(this.state.class);
            }}
          />
        </View>

        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Classroom capacity</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.class.classroomCapacity.toString()}
            editable={this.state.editable}
            onChangeText={(text) => {
              text == ""
                ? (_class.classroomCapacity = "")
                : (this.state.class.classroomCapacity = parseInt(text));
              this.setState(this.state.class);
            }}
          />
        </View>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>No of furniture</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.class.noOfFurniture.toString()}
            editable={this.state.editable}
            onChangeText={(text) => {
              text == ""
                ? (_class.noOfFurniture = "")
                : (this.state.class.noOfFurniture = parseInt(text));
              this.setState(this.state.class);
            }}
          />
        </View>

        <Button
          title={"Submit"}
          type={"outline"}
          containerStyle={styles.button}
          onPress={this.addClass}
        />
      </ScrollView>
    );
  }
}

export default NewClass;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
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
  button: {
    margin: 10,
  },
});
