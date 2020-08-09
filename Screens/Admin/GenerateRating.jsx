import React from "react";
import { ActivityIndicator } from "react-native";

class GenerateRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGenerating: false,
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div>{this.state.isGenerating ? <ActivityIndicator /> : <div></div>}</div>
    );
  }
}
export default GenerateRating;
