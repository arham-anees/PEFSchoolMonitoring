import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
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
                if (x.data().isSubmitted)
                  schools.push({ record: x.data(), id: x.id });
                else if (
                  firebase.auth().currentUser.providerData[0].email ===
                  x.data().lastModifiedBy
                ) {
                  schools.push({ record: x.data(), id: x.id });
                }
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

export function submitReport(report, doc) {
  return new Promise((resolve, reject) => {
    try {
      report.isSubmitted = true;
      report.submissionDate = Date.now();
      let db = firebase.firestore();
      db.collection(CollectionNames.Reports)
        .doc(doc)
        .update(report)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => reject(err));
    } catch (err) {
      reject(err);
    }
  });
}
