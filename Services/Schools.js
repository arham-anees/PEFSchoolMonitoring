import * as firebase from "firebase";
import "firebase/firestore";
import CollectionNames from "./CollectionNames";
import { setReport } from "./Reports";

export function setSchool(school) {
  return new Promise((resolve, reject) => {
    try {
      setReport(school)
        .then((res) => {
          let db = firebase.firestore();
          db.collection(CollectionNames.Schools)
            .doc(school.id)
            .set(school)
            .then((response) => {
              console.log(response);
              debugger;
              resolve(res);
            })
            .catch((err) => reject(err));
        })
        .catch((err) => reject(err));
    } catch (err) {
      reject(err);
    }
  });
}

export function updateSchool(school) {
  return new Promise((resolve, reject) => {
    try {
      school.lastModifiedOn = Date.now();
      school.lastModifiedBy = firebase.auth().currentUser.email;
      setReport(school)
        .then((res) => {
          let db = firebase
            .firestore()
            .collection(CollectionNames.Schools)
            .doc("school" + school.id)
            .update(school)
            .then((res) => {
              resolve(res);
            })
            .catch((err) => reject(err));
        })
        .catch((err) => reject(err));
    } catch (error) {
      reject(error);
    }
  });
}

export function getAllSchools() {
  return new Promise((resolve, reject) => {
    try {
      firebase
        .firestore()
        .collection(CollectionNames.Schools)
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
