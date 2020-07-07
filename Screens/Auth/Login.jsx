import React, { Component, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import {
  LoginWithGoogle,
  LoginWithFacebook,
  onAuthStateChange,
} from "../../Services/Auth";
import * as firebase from "firebase";

const onClickListener = (viewId) => {
  alert(viewId);
};

export default function Login(props) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      props.navigation.navigate("SignUp");
    }
  });
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={{ uri: "https://lorempixel.com/900/1400/nightlife/2/" }}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(email) => this.setState({ email })}
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
            onChangeText={(password) => this.setState({ password })}
          />
          <Image
            style={styles.inputIcon}
            source={{ uri: "https://img.icons8.com/nolan/40/000000/key.png" }}
          />
        </View>

        <TouchableOpacity
          style={styles.btnForgotPassword}
          onPress={() => onClickListener("restore_password")}
        >
          <Text style={styles.btnText}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => onClickListener("login")}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginWithGoogle]}
        >
          <View style={styles.loginButtonLogoWrapper}>
            <Image
              style={styles.loginButtonLogo}
              source="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/2659939281579738432-512.png"
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
          onPress={LoginWithFacebook}
        >
          <View style={styles.loginButtonLogoWrapper}>
            <Image
              style={[styles.loginButtonLogo, {}]}
              source="https://www.freeiconspng.com/uploads/facebook-f-logo-white-background-21.jpg"
            />
          </View>
          <Text style={styles.loginText}>Login With Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => LoginWithGoogsle()}
        >
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: "transparent",
  },
  btnForgotPassword: {
    height: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 10,
    width: 300,
    backgroundColor: "transparent",
  },
  loginButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: "white",
  },
  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  loginWithGoogle: {
    backgroundColor: "#4285f4",
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginButtonLogoWrapper: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  loginButtonLogo: {
    height: 24,
    width: 24,
  },
});
