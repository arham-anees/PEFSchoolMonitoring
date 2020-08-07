import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  BackHandler,
} from "react-native";
import { SignInWithEmailAndPassword, GetRole } from "../../Services/Auth";

// const Google = () => {
//   try {
//     // ToastAndroid.showWithGravity(
//     //   "Please wait while we log you in",
//     //   ToastAndroid.LONG,
//     //   ToastAndroid.BOTTOM
//     // );
//     LoginWithGoogle();
//     // .then((res) => {
//     //   console.log(res);
//     // })
//     // .catch((err) => console.log(err));
//   } catch (err) {
//     console.error("Handled Error", err);
//   }
// };

// const Facebook = () => {
//   try {
//     LoginWithFacebook()
//       .then((res) => console.log(res))
//       .catch((err) => console.error("handled Error", err));
//   } catch (error) {
//     console.log(error);
//   }
// };

const Email = (email, password, props) => {
  try {
    SignInWithEmailAndPassword(email, password)
      .then((res) => {
        if (res !== null) {
          console.log("point 4", email);
          GetRole(email)
            .then((res) => {
              console.log("point 5", res);
              props.navigation.navigate(
                res === "null"
                  ? "Profile"
                  : res === "Admin"
                  ? "AdminHome"
                  : "MonitorHome"
              );
            })
            .catch((err) => alert(err));
        }
      })
      .catch((err) => {
        console.log("Login failed", err);
        alert(err.message);
      });
  } catch (error) {
    console.log("Handled Error", error);
  }
};

BackHandler.addEventListener("hardwareBackPress", () => BackHandler.exitApp());

export default function Login(props) {
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
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
            underlineColorAndroid="transparent"
            autoCapitalize={"none"}
            value={email}
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
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <Image
            style={styles.inputIcon}
            source={{ uri: "https://img.icons8.com/nolan/40/000000/key.png" }}
          />
        </View>

        <TouchableOpacity style={styles.btnForgotPassword}>
          <Text style={styles.btnText}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => Email(email, password, props)}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={[styles.buttonContainer, styles.loginWithGoogle]}
          onPress={Google}
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
          onPress={Facebook}
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
          <Text style={styles.loginText}>Login With Facebook</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => props.navigation.navigate("SignUp")}
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
