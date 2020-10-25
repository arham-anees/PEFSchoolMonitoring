import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { CreateUserWithEmailAndPassword } from "../../Services/Auth";
import { Button } from "react-native-elements";
import styles from "./Style";
import { isPasswordValid } from "../../Helper/Helper";

export default function SignUp(props) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={{
          uri:
            "https://coloredbrain.com/wp-content/uploads/2016/07/login-background.jpg",
        }}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize={"none"}
            underlineColorAndroid="transparent"
            onChangeText={(value) => setEmail(value)}
          />
          <ImageBackground
            style={styles.inputIcon}
            source={{
              uri: "https://img.icons8.com/nolan/40/000000/email.png",
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={(value) => {
              if (isPasswordValid(value)) {
                setPassword(value);
              } else {
                alert(
                  "Please insert valid password. A valid password only contains at least one small alphabet, one capital, one number and one special character(@ . -)"
                );
              }
            }}
          />
          <Image
            style={styles.inputIcon}
            source={{ uri: "https://img.icons8.com/nolan/40/000000/key.png" }}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Confirm Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={(value) => {
              if (isPasswordValid(value)) {
                setConfirmPassword(value);
              } else {
                alert(
                  "Please insert valid password. A valid password only contains at least one small alphabet, one capital, one number and one special character(@ . -)"
                );
              }
            }}
          />
          <Image
            style={styles.inputIcon}
            source={{ uri: "https://img.icons8.com/nolan/40/000000/key.png" }}
          />
        </View>

        <Button
          title="Sign Up"
          buttonStyle={styles.buttonContainer}
          onPress={() => {
            if (password === confirmPassword) {
              CreateUserWithEmailAndPassword(email, password);
            } else {
              alert(
                "Password are not identical. Please insert identical passwords."
              );
            }
          }}
          type={"outline"}
        />
        {/* <TouchableOpacity
          style={[styles.buttonContainer, styles.loginWithGoogle]}
          onPress={() => LoginWithGoogle()}
        >
          <View style={styles.loginButtonLogoWrapper}>
            <Image
              style={styles.loginButtonLogo}
              source={{
                uri: "https://i.dlpng.com/static/png/6330185_preview.png",
              }}
            />
          </View>
          <Text style={styles.loginText}>Login With Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonContainer,
            styles.loginWithGoogle,
            { backgroundColor: "#3b5998" },
          ]}
          onPress={() => LoginWithFacebook()}
        >
          <View style={styles.loginButtonLogoWrapper}>
            <Image
              style={[styles.loginButtonLogo, {}]}
              source={{
                uri:
                  "https://www.freeiconspng.com/uploads/facebook-f-logo-white-background-21.jpg",
              }}
            />
          </View>
          <Text style={styles.loginText}>Login With Google</Text>
        </TouchableOpacity>*/}
      </ImageBackground>
    </View>
  );
}
