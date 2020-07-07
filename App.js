import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ImagePropTypes } from "react-native";
import Navigator from "./Helper/Stack";
import { onAuthStateChange } from "./Services/Auth";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBFPmAiRnX6_a6pUSV2Gansh20DcwB25LQ",
  authDomain: "pefschoolmonitoring.firebaseapp.com",
  databaseURL: "https://pefschoolmonitoring.firebaseio.com",
  projectId: "pefschoolmonitoring",
  storageBucket: "pefschoolmonitoring.appspot.com",
  messagingSenderId: "1012321083324",
  appId: "1:1012321083324:web:9c18dbe078c66ef93195b9",
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  const [user, setUser] = useState("");
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    }
  });
  return <Navigator user />;
}
