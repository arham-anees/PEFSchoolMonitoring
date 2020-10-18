import * as firebase from "firebase";

//export function InitFirebase() {
const firebaseConfig = {
  apiKey: "AIzaSyAimOB-d5rpRRNcyHlkJkGZ6t8OPT4AiOM",
  authDomain: "pef-school-monitoring.firebaseapp.com",
  databaseURL: "https://pef-school-monitoring.firebaseio.com",
  projectId: "pef-school-monitoring",
  storageBucket: "pef-school-monitoring.appspot.com",
  messagingSenderId: "577243383811",
  appId: "1:577243383811:web:df5a8967a2609e3e632636",
  measurementId: "G-S1WFR58R1Q",
};
try {
  var firebaseApp = firebase.initializeApp(firebaseConfig);
} catch (err) {
  console.log("Error in initializing firebase app");
  alert("Error in initializing firebase app");
}
export const firebaseAuth = firebaseApp.auth();
