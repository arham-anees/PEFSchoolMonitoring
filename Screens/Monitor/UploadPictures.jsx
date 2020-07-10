import React from "react";
import { Text } from "react-native";
import ImagePicker from "react-native-image-picker";

function UploadPictures(props) {
  return <Text onPress={() => chooseImage()}>Upload picture</Text>;
}

export default UploadPictures;
let options = {
  title: "Select Image",
  customButtons: [
    { name: "customOptionKey", title: "Choose Photo from Custom Option" },
  ],
  storageOptions: {
    skipBackup: true,
    path: "images",
  },
};

/**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info in the API Reference)
 */

chooseImage = () => {
  let options = {
    title: "Select Image",
    customButtons: [
      { name: "customOptionKey", title: "Choose Photo from Custom Option" },
    ],
    storageOptions: {
      skipBackup: true,
      path: "images",
    },
  };
  ImagePicker.showImagePicker(options, (response) => {
    console.log("Response = ", response);

    if (response.didCancel) {
      console.log("User cancelled image picker");
    } else if (response.error) {
      console.log("ImagePicker Error: ", response.error);
    } else if (response.customButton) {
      console.log("User tapped custom button: ", response.customButton);
      alert(response.customButton);
    } else {
      const source = { uri: response.uri };

      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      // alert(JSON.stringify(response));s
      console.log("response", JSON.stringify(response));
      this.setState({
        filePath: response,
        fileData: response.data,
        fileUri: response.uri,
      });
    }
  });
};
