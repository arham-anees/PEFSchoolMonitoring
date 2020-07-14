import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { Button } from "react-native-elements";

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

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Grade</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.class.grade}
            editable={this.state.editable}
            onChangeText={(text) => {
              this.state.class.grade = parseInt(text);
              this.setState(this.state.class);
            }}
          />
        </View>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Section</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.class.section}
            editable={this.state.editable}
            onChangeText={(text) => {
              this.state.class.section = text;
              this.setState(this.state.class);
            }}
          />
        </View>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Total Enrollments</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.class.totalEnrollment}
            editable={this.state.editable}
            onChangeText={(text) => {
              this.state.class.totalEnrollment = parseInt(text);
              this.setState(this.state.class);
            }}
          />
        </View>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Active Students</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.class.activeStudents}
            editable={this.state.editable}
            onChangeText={(text) => {
              this.state.class.activeStudents = parseInt(text);
              this.setState(this.state.class);
            }}
          />
        </View>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Disabled Students</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.class.disabledStudents}
            editable={this.state.editable}
            onChangeText={(text) => {
              this.state.class.disabledStudents = parseInt(text);
              this.setState(this.state.class);
            }}
          />
        </View>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Non-PEF Students</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.class.nonPefStudents}
            editable={this.state.editable}
            onChangeText={(text) => {
              this.state.class.nonPefStudents = parseInt(text);
              this.setState(this.state.class);
            }}
          />
        </View>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Unregistered Students</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.class.unregisteredStudents}
            editable={this.state.editable}
            onChangeText={(text) => {
              this.state.class.unregisteredStudents = parseInt(text);
              this.setState(this.state.class);
            }}
          />
        </View>

        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Dropout Students</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.class.dropoutStudents}
            editable={this.state.editable}
            onChangeText={(text) => {
              this.state.class.dropoutStudents = parseInt(text);
              this.setState(this.state.class);
            }}
          />
        </View>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Students with no Uniform</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.class.uniformlessStudents}
            editable={this.state.editable}
            onChangeText={(text) => {
              this.state.class.uniformlessStudents = parseInt(text);
              this.setState(this.state.class);
            }}
          />
        </View>

        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Classroom capacity</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.class.classroomCapacity}
            editable={this.state.editable}
            onChangeText={(text) => {
              this.state.class.classroomCapacity = parseInt(text);
              this.setState(this.state.class);
            }}
          />
        </View>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>No of furniture</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            value={this.state.class.noOfFurniture}
            editable={this.state.editable}
            onChangeText={(text) => {
              this.state.class.noOfFurniture = parseInt(text);
              this.setState(this.state.class);
            }}
          />
        </View>

        <Button
          title={"Submit"}
          type={"outline"}
          containerStyle={styles.button}
          onPress={() => {
            this.props.route.params.addClass(this.state.class)
              ? this.props.navigation.pop(2)
              : alert("Failed to add class");
          }}
        />
      </View>
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
