import * as firebase from "firebase";

//export function InitFirebase() {
const firebaseConfig = {
  apiKey: "AIzaSyBFPmAiRnX6_a6pUSV2Gansh20DcwB25LQ",
  authDomain: "pefschoolmonitoring.firebaseapp.com",
  databaseURL: "https://pefschoolmonitoring.firebaseio.com",
  projectId: "pefschoolmonitoring",
  storageBucket: "pefschoolmonitoring.appspot.com",
  messagingSenderId: "1012321083324",
  appId: "1:1012321083324:web:9c18dbe078c66ef93195b9",
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
//}
export const firebaseAuth = firebaseApp.auth();
