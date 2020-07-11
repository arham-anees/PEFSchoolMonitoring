import * as firebase from "firebase";
import "firebase/firestore";
import CollectionNames from "./CollectionNames";

export function SetOrUpdateProfile(profile) {
  return new Promise((resolve, reject) => {
    try {
      let db = firebase.firestore();
      GetProfile(profile.email)
        .then((_profile) => {
          //update profile
          console.log("resolved", _profile);
          db.collection(CollectionNames.Profile)
            .doc(profile.email)
            .update({
              ...profile,
              lastModifiedOn: Date.now(),
            })
            .then(() => {
              resolve("Role assigned");
            })
            .catch((err) => reject(err));
        })
        .catch((err) => {
          console.log("rejected", err);
          if (err === "null") {
            //set profiledb.collection(CollectionNames.Profile)
            try {
              db.collection(CollectionNames.Profile)
                .doc(profile.email)
                .set({
                  ...profile,
                  lastModifiedOn: Date.now(),
                })
                .then(() => {
                  resolve("Role assigned");
                })
                .catch((err) => reject(err));
            } catch (err) {
              reject(err);
            }
          } else reject(err);
        });
    } catch (error) {
      reject(error);
    }
  });
}

export function GetProfile(email) {
  return new Promise((resolve, reject) => {
    try {
      firebase
        .firestore()
        .collection(CollectionNames.Profile)
        .doc(email)
        .get()
        .then((doc) => {
          if (doc.exists) resolve(doc.data());
          else reject("null"); //this is flag
        })
        .catch((err) => {
          reject(err);
        });
    } catch (err) {
      reject(err);
    }
  });
}

export function SetApproval(profile) {
  return new Promise((resolve, reject) => {
    try {
      let db = firebase.firestore();
      db.collection(CollectionNames.Profile)
        .doc(email)
        .get()
        .then((doc) => {
          if (doc.exists) {
            reject("User is already assigned role");
          } else {
            db.collection(CollectionNames.Profile)
              .doc(email)
              .set({
                ...profile,
                approvedBy: firebase.auth().currentUser.uid,
                approvedOn: Date.now(),
              })
              .then(() => {
                resolve("Role assigned");
              })
              .catch((err) => reject(err));
          }
        })
        .catch((err) => reject(err));
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
}
