import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { Button } from "react-native-elements";

class Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: {},
      editable: false,
    };
  }
  componentDidMount() {
    let _class = this.props.route.params.class;
    let editable = this.props.route.params.editable;
    this.setState({ class: _class, editable });
  }
  render() {
    let cls = this.state.class;
    if (this.state.class === undefined || this.state.class === null)
      return <ActivityIndicator />;
    else
      return (
        <View style={styles.container}>
          <View style={[styles.wrapper, styles.inputWrapper]}>
            <Text style={styles.inputLabel}>Total Enrollments</Text>
            <TextInput
              style={styles.textInput}
              keyboardType={"number-pad"}
              value={
                cls.totalEnrollment > 0 ? cls.totalEnrollment.toString() : "-"
              }
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
              value={
                cls.activeStudents > 0 ? cls.activeStudents.toString() : "-"
              }
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
              value={
                cls.disabledStudents > 0 ? cls.disabledStudents.toString() : "-"
              }
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
              value={
                cls.nonPefStudents > 0 ? cls.nonPefStudents.toString() : "-"
              }
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
              value={
                cls.unregisteredStudents > 0
                  ? cls.unregisteredStudents.toString()
                  : "-"
              }
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
              value={
                this.state.class.dropoutStudents > 0
                  ? cls.dropoutStudents.toString()
                  : "-"
              }
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
              value={
                this.state.class.uniformlessStudents > 0
                  ? cls.uniformlessStudents.toString()
                  : "-"
              }
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
              value={
                this.state.class.classroomCapacity > 0
                  ? cls.classroomCapacity.toString()
                  : "-"
              }
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
              value={
                this.state.class.noOfFurniture > 0
                  ? cls.noOfFurniture.toString()
                  : "-"
              }
              editable={this.state.editable}
              onChangeText={(text) => {
                this.state.class.noOfFurniture = parseInt(text);
                this.setState(this.state.class);
              }}
            />
          </View>
          {this.state.editable ? (
            <Button
              title={"Submit"}
              type={"outline"}
              containerStyle={styles.button}
              onPress={() =>
                this.props.route.params.updateClass(this.state.class)
              }
            />
          ) : null}
        </View>
      );
  }
}

export default Class;

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
