import React from "react";
import { View, Image, ScrollView } from "react-native";
import { GetImages } from "../../../Services/Images";
import { Text, Input } from "react-native-elements";
import { Dimensions } from "react-native";

class Pictures extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
  }
  componentDidMount() {
    let p = this.props.route.params;
    GetImages(p.schoolId, p.grade, p.section).then((res) => {
      this.setState({ pictures: res });
      console.log(res);
    });
  }
  render() {
    return (
      <ScrollView style={{ marginHorizontal: 10 }}>
        {this.state.pictures === null || this.state.pictures.length === 0 ? (
          <Text>No Picture Found</Text>
        ) : (
          <View style={{ paddingBottom: 50 }}>
            <Input
              label="School"
              disabled={true}
              value={
                this.props.route.params.schoolId
                  ? this.props.route.params.schoolId.toString()
                  : ""
              }
            />
            <Input
              label="Class"
              disabled={true}
              value={
                this.props.route.params.grade
                  ? this.props.route.params.grade.toString()
                  : ""
              }
            />
            <Input
              label="Section"
              disabled={true}
              value={
                this.props.route.params.section
                  ? this.props.route.params.section.toString()
                  : ""
              }
            />
            {this.state.pictures.map((img, i) =>
              img.schoolId === this.props.route.params.schoolId &&
              img.class === this.props.route.params.grade &&
              img.section === this.props.route.params.section ? (
                <View key={i}>
                  <Image
                    style={{
                      height: Math.round(200),
                      width: Math.round(Dimensions.get("window").width),
                      margin: 5,
                    }}
                    resizeMode={"cover"}
                    source={{ uri: img.downloadURL }}
                  />
                  {/* <Text style={{ textAlign: "center" }}>
                    {img.lastModifiedBy} yes
                  </Text> */}
                  <Text
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    {Date(img.lastModifiedOn).toString().substring(0, 24)}
                  </Text>
                </View>
              ) : null
            )}
          </View>
        )}
      </ScrollView>
    );
  }
}

export default Pictures;
