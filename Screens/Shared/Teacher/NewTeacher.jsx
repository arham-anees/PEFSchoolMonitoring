import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { CheckBox, Button } from "react-native-elements";
class NewTeacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: {
        name: "",
        cnic: "",
        designation: "",
        joiningDate: new Date(),
        qualification: [],
        isCpdpTrained: false,
      },
      newQualification: {
        name: "",
        institute: "",
        yearOfCompletion: "",
      },
    };
  }
  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };
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
          />
        </View>
        <View style={[styles.wrapper, styles.inputWrapper]}>
          <Text style={styles.inputLabel}>Joining Date</Text>
          {/* <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode={"date"}
            is24Hour={true}
            display="default"
            onChange={this.onChange}
          /> */}
          <TextInput
            style={styles.textInput}
            value={this.state.teacher.joiningDate.toDateString()}
            editable={false}
            onChangeText={(text) => {
              this.state.teacher.joiningDate = text;
              this.setState(this.state.teacher);
            }}
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
                <View style={styles.qualification} key={i}>
                  <TextInput
                    style={[styles.textInput, styles.qualificationInput]}
                    value={q.name}
                  />
                  <TextInput
                    style={[styles.textInput, styles.qualificationInput]}
                    value={q.institute}
                  />
                  <TextInput
                    style={[styles.textInput, styles.qualificationInput]}
                    keyboardType={"number-pad"}
                    value={q.yearOfCompletion}
                  />
                </View>
              ))}
        </View>
        <View>
          <View style={{ marginTop: 10 }}>
            <View style={styles.qualification}>
              <TextInput
                style={[styles.textInput, styles.qualificationInput]}
                editable={this.state.enable}
                placeholder="Qualification"
                value={this.state.newQualification.name}
                onChangeText={(text) => {
                  this.state.newQualification.name = text;
                  this.setState(this.state.newQualification);
                }}
              />
              <TextInput
                style={[styles.textInput, styles.qualificationInput]}
                editable={this.state.enable}
                placeholder="Institute"
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
                placeholder="Year Completion"
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
              containerStyle={{ marginTop: 10, marginHorizontal: 10 }}
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
              containerStyle={{ marginTop: 10, marginHorizontal: 10 }}
              onPress={() => {
                if (this.state.teacher.cnic.length !== 13) {
                  Alert.alert(
                    "Invalid CNIC",
                    "Please enter valid 13 digit CNIC without dashes"
                  );
                } else {
                  this.props.route.params.addTeacher(this.state.teacher);
                  this.props.navigation.pop();
                }
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default NewTeacher;

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
