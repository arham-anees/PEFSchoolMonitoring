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
    });
  }
  render() {
    return (
      <ScrollView>
        {this.state.pictures.length === 0 ? (
          <Text>No Picture Found</Text>
        ) : (
          <View>
            <Input
              label="School"
              disabled={true}
              value={this.props.route.params.schoolId}
            />
            <Input
              label="School"
              disabled={true}
              value={this.props.route.params.schoolId}
            />
            <Input
              label="School"
              disabled={true}
              value={this.props.route.params.schoolId}
            />
            {this.state.pictures.map((img, i) =>
              img.schoolId === this.props.schoolId &&
              img.grade === this.props.grade &&
              img.section === this.props.section ? (
                <View>
                  <Image
                    key={i}
                    source={{ uri: img.downloadURL }}
                    style={{
                      height: Math.round(Dimensions.get("window").height - 30),
                      width: Math.round(Dimensions.get("window").width),
                      margin: 5,
                      resizeMode: "contain",
                    }}
                  />
                  <Text>{img.lastModifiedBy}</Text>
                  <Text>{Date(img.lastModifiedOn)}</Text>
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
