import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  ProgressBarAndroid,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Button, Image, Input } from "react-native-elements";
import { UploadImage } from "../../Services/Images";
import * as firebase from "firebase";
import "firebase/firestore";

class UploadPictures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      isUploading: false,
      progress: 0,
      schoolId: 1,
      class: 5,
      section: "A",
      uploaded: 0,
      processed: 0,
    };
  }

  uriToBlob = (uri) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        // return the blob
        resolve(xhr.response);
      };

      xhr.onerror = function () {
        // something went wrong
        reject(new Error("uriToBlob failed"));
      };
      // this helps us get a blob
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);

      xhr.send(null);
    });
  };

  handleUpload = () => {
    if (
      this.state.class < 1 ||
      this.state.class > 10 ||
      this.state.schoolId <= 0 ||
      this.state.images.length === 0
    ) {
      alert("Please complete all fields first");
    } else {
      console.log("checks passed");
      this.setState({ isUploading: true });
      let downloadPath = "";
      const total = this.state.images.length;
      let completed = 0;
      let failed = 0;
      this.state.images.forEach((img, i) => {
        //UploadImage(img);
        this.setState({ processed: this.state.processed + 1 });
        img.uploadedOn = Date.now();
        img.uploadedBy = firebase.auth().currentUser.email;
        img.schoolId = this.state.schoolId;
        img.class = this.state.class;
        img.section = this.state.section;
        //debugger;
        try {
          var uploadTask = firebase
            .storage()
            .ref("images")
            .child(Date.now().toString() + ".jpg")
            .put(img.blob, { contentType: "image/jpeg" });
          // firebase
          //   .storage()
          //   .ref("images")
          //   .child(Date.now().toString())
          //   .putString(img.file);
          uploadTask.on(
            "state_changed",
            function (snapshot) {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              let progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
            },
            function (error) {
              // Handle unsuccessful uploads
              failed += 1;
              console.log("failed 1");
            },
            function () {
              try {
                console.log("upload starting");
                uploadTask.snapshot.ref
                  .getDownloadURL()
                  .then((downloadURL) => {
                    console.log("download path ", downloadURL);
                    //remove file
                    img.file = null;
                    img.blob = null;
                    img.downloadURL = downloadURL;
                    UploadImage(img).then(() => {
                      completed += 1;
                      if (completed + failed === total) {
                        if (failed === 0)
                          alert("All pictures successfully uploaded");
                        else if (completed === 0)
                          alert("All pictures failed to upload");
                        else
                          alert(
                            completed +
                              " uploaded successfully while " +
                              failed +
                              " failed"
                          );
                      }
                    });
                  })
                  .catch(() => {
                    failed += 1;
                    console.log("failed 2");
                  });
              } catch (err) {
                console.log(err);
              }
            }
          );
        } catch (err) {
          console.log(err);
          alert("failed to upload image. please try again later");
        }
      });
    }
  };

  _pickImage = () => {
    try {
      let result = ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
        allowsMultipleSelection: true,
      });
      result.then((res) => {
        console.log(res);
        if (!res.cancelled) {
          let newImage = { file: res.uri };
          newImage.schoolId = 1;
          newImage.downloadURL = null;
          newImage.width = res.width;
          newImage.height = res.height;
          this.uriToBlob(res.uri)
            .then((result) => (newImage.blob = result))
            .catch((err) => (newImage.blob = undefined));
          //newImage.base64 = res.base64;
          this.setState({ images: [...this.state.images, newImage] });
        }
      });
    } catch (E) {
      console.log(E);
    }
  };

  render() {
    return (
      <View style={Styles.container}>
        <View>
          <Input
            label="School"
            placeholder="School ID"
            keyboardType={"number-pad"}
            value={
              isNaN(this.state.schoolId.toString())
                ? ""
                : this.state.schoolId.toString()
            }
            onChangeText={(text) => this.setState({ schoolId: parseInt(text) })}
          />
          <Input
            label="Class"
            placeholder="Class"
            keyboardType={"number-pad"}
            value={
              isNaN(this.state.class.toString())
                ? ""
                : this.state.class.toString()
            }
            onChangeText={(text) => this.setState({ class: parseInt(text) })}
          />
          <Input
            label="Section"
            placeholder="Section"
            value={this.state.section}
            onChangeText={(text) => this.setState({ section: text })}
          />
        </View>
        <View style={Styles.listContainer}>
          {this.state.images.length === 0 ? (
            <Text>No Image Selected</Text>
          ) : (
            this.state.images.map((img, i) => (
              <Image
                key={i}
                source={{ uri: img.file }}
                style={{ width: 100, height: 100, margin: 5 }}
              />
            ))
          )}
        </View>
        {this.state.images.length > 0 && !this.state.isUploading ? (
          <Button
            onPress={this.handleUpload}
            title={"Upload"}
            type={"solid"}
            containerStyle={{ marginBottom: 5 }}
          />
        ) : null}
        {this.state.isUploading ? (
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={this.state.progress}
          />
        ) : (
          <Button
            style={{ marginHorizontal: 10 }}
            onPress={this._pickImage}
            title={"Select Image"}
            type={"outline"}
            raised
          />
        )}
      </View>
    );
  }
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
