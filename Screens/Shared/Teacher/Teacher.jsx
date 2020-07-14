import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { CheckBox, Button } from "react-native-elements";
class Teacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: {},
      newQualification: {
        name: "",
        institute: "",
        yearOfCompletion: "",
      },
      enable: false,
    };
  }
  componentDidMount() {
    let teacher = this.props.route.params.teacher;
    console.log(teacher);
    this.setState({ teacher, enable: this.props.route.params.editable });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.textInput}
            value={this.state.teacher.name}
            onChangeText={(text) => {
              this.state.teacher.name = text;
              this.setState(this.state.teacher);
            }}
            editable={this.state.enable}
          />
        </View>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>CNIC</Text>
          <TextInput
            style={styles.textInput}
            value={this.state.teacher.cnic}
            onChangeText={(text) => {
              this.state.teacher.cnic = text;
              this.setState(this.state.teacher);
            }}
            editable={false}
          />
        </View>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Designation</Text>
          <TextInput
            style={styles.textInput}
            value={this.state.teacher.designation}
            onChangeText={(text) => {
              this.state.teacher.designation = text;
              this.setState(this.state.teacher);
            }}
            editable={this.state.enable}
          />
        </View>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Joining Date</Text>
          <TextInput
            style={styles.textInput}
            value={this.state.teacher.joiningDate}
            onChangeText={(text) => {
              this.state.teacher.joiningDate = text;
              this.setState(this.state.teacher);
            }}
            editable={this.state.enable}
          />
        </View>
        <CheckBox
          title="Is CPDP Trained"
          checked={this.state.teacher.isCpdpTrained}
          iconRight={true}
          wrapperStyle={styles.wrapper}
          onPress={() => {
            this.state.teacher.isCpdpTrained = !this.state.teacher
              .isCpdpTrained;
            this.setState(this.state.teacher);
          }}
        />
        <View>
          {this.state.teacher.qualification === undefined ||
          this.state.teacher.qualification === null ||
          this.state.teacher.qualification.length === 0
            ? null
            : this.state.teacher.qualification.map((q, i) => (
                <View style={[styles.qualification, { marginTop: 10 }]} key={i}>
                  <TextInput
                    style={[styles.textInput, styles.qualificationInput]}
                    value={q.name}
                    editable={this.state.enable}
                  />
                  <TextInput
                    style={[styles.textInput, styles.qualificationInput]}
                    value={q.institute}
                    editable={this.state.enable}
                  />
                  <TextInput
                    style={[styles.textInput, styles.qualificationInput]}
                    keyboardType={"number-pad"}
                    value={q.yearOfCompletion}
                    editable={this.state.enable}
                  />
                </View>
              ))}
        </View>
        <View>
          {this.state.enable ? (
            <View style={{ marginTop: 10 }}>
              <View style={styles.qualification}>
                <TextInput
                  style={[styles.textInput, styles.qualificationInput]}
                  editable={this.state.enable}
                  value={this.state.newQualification.name}
                  onChangeText={(text) => {
                    this.state.newQualification.name = text;
                    this.setState(this.state.newQualification);
                  }}
                />
                <TextInput
                  style={[styles.textInput, styles.qualificationInput]}
                  editable={this.state.enable}
                  value={this.state.newQualification.institute}
                  onChangeText={(text) => {
                    this.state.newQualification.institute = text;
                    this.setState(this.state.newQualification);
                  }}
                />
                <TextInput
                  style={[styles.textInput, styles.qualificationInput]}
                  keyboardType={"number-pad"}
                  editable={this.state.enable}
                  value={this.state.newQualification.qualificationInput}
                  onChangeText={(text) => {
                    this.state.newQualification.yearOfCompletion = text;
                    this.setState(this.state.newQualification);
                  }}
                />
              </View>
              <Button
                title={"Add Qualification"}
                type={"outline"}
                onPress={() => {
                  const newQualification = { ...this.state.newQualification };
                  let teacher = { ...this.state.teacher };
                  teacher.qualification.push(newQualification);
                  this.setState({
                    teacher,
                    newQualification: {
                      name: "",
                      institute: "",
                      yearOfCompletion: "",
                    },
                  });
                }}
              />
              <Button
                title={"Submit"}
                type={"solid"}
                onPress={() => {
                  this.props.route.params.updateTeacher(this.state.teacher);
                  this.props.navigation.pop();
                }}
              />
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

export default Teacher;

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
  qualification: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  qualificationInput: {
    width: "30%",
  },
});
