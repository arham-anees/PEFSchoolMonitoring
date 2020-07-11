import React, { useState } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Button, Image } from "react-native-elements";

function _pickImage(images, setImages) {
  try {
    let result = ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      allowsMultipleSelection: true,
    });
    result.then((res) => {
      console.log(res);
      if (!res.cancelled) setImages([...images, res.uri]);
    });

    //console.log(result);
  } catch (E) {
    console.log(E);
  }
}

function handleUpload(images) {
  console.log(images);
}

function UploadPictures(props) {
  let [images, setImages] = useState([]);
  let jsx = <View></View>;
  if (images.length > 0) {
    // images.forEach((image) => {
    //   jsx += (
    //     <Image
    //       source={{ uri: image }}
    //       style={{ width: 200, height: 200 }}
    //       PlaceholderContent={<ActivityIndicator />}
    //     />
    //   );
    //   debugger;
    // });
  } else {
    jsx = <Text>No image selected</Text>;
  }
  return (
    <View style={Styles.container}>
      <View style={Styles.listContainer}>
        {images.length === 0 ? (
          <Text>No Image Selected</Text>
        ) : (
          images.map((img, i) => (
            <Image
              key={i}
              source={{ uri: img }}
              style={{ width: 100, height: 100, margin: 5 }}
            />
          ))
        )}
      </View>
      {images.length > 0 ? (
        <Button
          onPress={() => handleUpload(images)}
          title={"Upload"}
          type={"solid"}
          containerStyle={{ marginBottom: 5 }}
        />
      ) : null}
      <Button
        onPress={() => _pickImage(images, setImages)}
        title={"Select Image"}
        type={"outline"}
        raised
      />
    </View>
  );
}

export default UploadPictures;

const Styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  listContainer: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
});
