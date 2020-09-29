import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { CheckBox, Button } from "react-native-elements";
import { submitReport } from "../../../Services/Reports";
import { ScrollView } from "react-native-gesture-handler";

class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      report: this.props.route.params.report,
      editable: false,
    };
  }
  handleSubmitPress = () => {
    submitReport(this.state.report, this.props.route.params.id)
      .then((x) => alert("Report Submitted successfully"))
      .catch((err) => {
        console.log(err);
        alert("Report Submission failed");
      });
  };
  getRating = () => {
    return (this.state.report.rating / 9) * 10;
  };

  getRemarks = () => {
    const rating = this.getRating();

    if (rating > 8) return "Should be awarded";
    else if (rating >= 7.5) return "Should be warned";
    else if (rating >= 7) return "Fine is 5,000";
    else if (rating >= 6.5) return "Fine is 10,000";
    else if (rating >= 6) return "Fine is 20,000";
    else return "Should be reviewed";
  };
  render() {
    return (
      <ScrollView>
        <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
          <View style={styles.wrapper}>
            <Text>Monitor</Text>
            <Text>{this.state.report.lastModifiedBy}</Text>
          </View>
          <View style={styles.wrapper}>
            <Text>Date</Text>
            <Text>
              {Date(this.state.report.lastModifiedOn).substring(0, 24)}
            </Text>
          </View>
          <View style={styles.wrapper}>
            <Text>Rating</Text>
            <Text>{this.getRating().toFixed(2).toString()}/10</Text>
          </View>
          <View style={styles.wrapper}>
            <Text>Remarks</Text>
            <Text>{this.getRemarks()}</Text>
          </View>
        </View>
        <CheckBox
          title="Overcrowded"
          checked={this.state.report.isOvercrowded}
          iconRight={true}
          wrapperStyle={styles.wrapper}
          onPress={this.toggleIsOvercrowded}
        />
        <CheckBox
          title="Congested"
          checked={this.state.report.isCongested}
          iconRight={true}
          wrapperStyle={styles.wrapper}
          onPress={() => this.toggleIsCongested()}
        />
        <CheckBox
          title="Artificial Light"
          checked={this.state.report.isLightArtificial}
          iconRight={true}
          wrapperStyle={styles.wrapper}
          onPress={() => this.toggleIsLightArtificial()}
        />
        <CheckBox
          title="Plaster Required"
          checked={this.state.report.isPlasteringRequired}
          iconRight={true}
          wrapperStyle={styles.wrapper}
          onPress={() => this.toggleIsPlasteringRequired()}
        />
        <CheckBox
          title="Proper Rooms Condition"
          checked={this.state.report.isRoomsConditionProper}
          iconRight={true}
          wrapperStyle={styles.wrapper}
          onPress={() => this.toggleIsRoomsConditionProper()}
        />
        <CheckBox
          title="Charging Students"
          checked={this.state.report.isStudentCharged}
          iconRight={true}
          wrapperStyle={styles.wrapper}
          onPress={() => this.toggleIsStudentCharged()}
        />
        <CheckBox
          title="Proper Furniture"
          checked={this.state.report.isFurnitureProper}
          iconRight={true}
          wrapperStyle={styles.wrapper}
          onPress={() => this.toggleIsFurnitureProper()}
        />
        <CheckBox
          title="Ventilated Rooms"
          checked={this.state.report.areRoomsVentilated}
          iconRight={true}
          wrapperStyle={styles.wrapper}
          onPress={() => this.toggleAreRoomsVentilated()}
        />
        <CheckBox
          title="Paid Teachers"
          checked={this.state.report.areTeachersPaid}
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
              this.state.report.noOfWritingBoards === -1
                ? ""
                : this.state.report.noOfWritingBoards.toString()
            }
            onChangeText={(text) => {
              text === ""
                ? (this.state.report.noOfWritingBoards = -1)
                : (this.state.report.noOfWritingBoards = parseInt(text));
              this.setState({ report: this.state.report });
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
              this.state.report.noOfProperFans === -1
                ? ""
                : this.state.report.noOfProperFans.toString()
            }
            onChangeText={(text) => {
              text !== ""
                ? (this.state.report.noOfProperFans = parseInt(text))
                : (this.state.report.noOfProperFans = -1);
              this.setState({ report: this.state.report });
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
              this.state.report.noOfTeacherChairs === -1
                ? ""
                : this.state.report.noOfTeacherChairs.toString()
            }
            onChangeText={(text) => {
              text === ""
                ? (this.state.report.noOfTeacherChairs = -1)
                : (this.state.report.noOfTeacherChairs = parseInt(text));
              this.setState({ report: this.state.report });
            }}
          />
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Button
            title={"Classes"}
            type={"outline"}
            containerStyle={{ marginTop: 10 }}
            onPress={() =>
              this.props.navigation.navigate("ClassesList", {
                classes: this.state.report.classes,
                editable: this.state.editable,
                updateClass: this.updateClass,
                addClass: this.addClass,
              })
            }
          />
          <Button
            title={"Teachers"}
            type={"outline"}
            style={styles.btn}
            onPress={() =>
              this.props.navigation.navigate("TeachersList", {
                teachers: this.state.report.teachers,
                updateTeacher: this.updateTeacher,
                editable: this.state.editable,
              })
            }
            containerStyle={{ marginTop: 10 }}
          />
          <Button
            title={"Submit"}
            type={"solid"}
            onPress={this.handleSubmitPress}
            containerStyle={{ marginTop: 10, marginBottom: 20 }}
            disabled={this.state.report.isSubmitted}
          />
        </View>
      </ScrollView>
    );
  }
}

export default Report;

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
  btn: {
    marginBottom: 10,
  },
});
