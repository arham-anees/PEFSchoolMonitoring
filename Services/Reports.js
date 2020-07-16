import * as firebase from "firebase";
import "firebase/firestore";
import CollectionNames from "./CollectionNames";

export function setReport(school) {
  return new Promise((resolve, reject) => {
    try {
      let db = firebase.firestore();
      db.collection(CollectionNames.Reports)
        .add(school)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => reject(err));
    } catch (err) {
      reject(err);
    }
  });
}

export function getAllReports() {
  return new Promise((resolve, reject) => {
    try {
      firebase
        .firestore()
        .collection(CollectionNames.Reports)
        .get()
        .then((response) => {
          if (response.docs.length > 0) {
            let schools = [];
            response.docs.map((x) => {
              if (x.exists) {
                schools.push(x.data());
              }
            });
            console.log(schools);
            resolve(schools.length > 0 ? schools : null);
          } else {
            resolve(null);
          }
        })
        .catch((err) => reject(err));
    } catch (err) {
      reject(err);
    }
  });
}
