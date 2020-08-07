<script src="http://192.168.86.129:8097"></script>;
import React, { useState } from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";

function PictureSearch(props) {
  let [schoolId, setSchoolId] = useState(0);
  let [grade, setGrade] = useState(0);
  let [section, setSection] = useState("");
  return (
    <View>
      <Input
        label="School ID"
        placeholder="School ID"
        keyboardType={"number-pad"}
        value={isNaN(schoolId.toString()) ? "" : schoolId.toString()}
        onChangeText={(text) => setSchoolId(parseInt(text))}
      />
      <Input
        label="Grade"
        placeholder="Grade"
        keyboardType={"number-pad"}
        value={isNaN(grade.toString()) ? "" : grade.toString()}
        onChangeText={(text) => setGrade(parseInt(text))}
      />
      <Input
        label="Section"
        placeholder="section"
        value={section}
        onChangeText={(text) => setSection(text)}
      />
      <Button
        title={"Search"}
        onPress={() =>
          props.navigation.navigate("Pictures", { schoolId, grade, section })
        }
      />
    </View>
  );
}

export default PictureSearch;
