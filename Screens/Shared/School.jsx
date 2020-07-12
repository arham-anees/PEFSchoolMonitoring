import React from "react";
import { Text, View, TextInputBase, TextInput, StyleSheet } from "react-native";
import { CheckBox, Input, Button } from "react-native-elements";

function School(props) {
  const school = props.route.params;
  console.log("school", school);
  return (
    <View>
      <CheckBox
        title="Overcrowded"
        checked={school.isOvercrowded}
        iconRight={true}
        wrapperStyle={styles.wrapper}
      />
      <CheckBox
        title="Congested"
        checked={school.isCongested}
        iconRight={true}
        wrapperStyle={styles.wrapper}
      />
      <CheckBox
        title="Artificial Light"
        checked={school.isLightArtificial}
        iconRight={true}
        wrapperStyle={styles.wrapper}
      />
      <CheckBox
        title="Plaster Required"
        checked={school.isPlasteringRequired}
        iconRight={true}
        wrapperStyle={styles.wrapper}
      />
      <CheckBox
        title="Proper Rooms Condition"
        checked={school.isRoomsConditionProper}
        iconRight={true}
        wrapperStyle={styles.wrapper}
      />
      <CheckBox
        title="Charging Students"
        checked={school.isStudentCharged}
        iconRight={true}
        wrapperStyle={styles.wrapper}
      />
      <CheckBox
        title="Proper Furniture"
        checked={school.isFurnitureProper}
        iconRight={true}
        wrapperStyle={styles.wrapper}
      />
      <CheckBox
        title="Ventilated Rooms"
        checked={school.areRoomsVentilated}
        iconRight={true}
        wrapperStyle={styles.wrapper}
      />
      <CheckBox
        title="Paid Teachers"
        checked={school.areTeachersPaid}
        iconRight={true}
        wrapperStyle={styles.wrapper}
      />

      <View style={[styles.wrapper, styles.inputWrapper]}>
        <Text style={styles.inputLabel}>No of Writing Boards</Text>
        <TextInput
          style={styles.textInput}
          placeholder="input"
          keyboardType={"number-pad"}
        />
      </View>
      <View style={[styles.wrapper, styles.inputWrapper]}>
        <Text style={styles.inputLabel}>No of Proper Fans</Text>
        <TextInput
          style={styles.textInput}
          placeholder="input"
          keyboardType={"number-pad"}
        />
      </View>
      <View style={[styles.wrapper, styles.inputWrapper]}>
        <Text style={styles.inputLabel}>No of Teacher Chairs</Text>
        <TextInput
          style={styles.textInput}
          placeholder="input"
          keyboardType={"number-pad"}
        />
      </View>
      <Button
        title={"Classes"}
        type={"outline"}
        onPress={() => props.navigation.navigate("ClassesList", school.classes)}
      />
    </View>
  );
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
