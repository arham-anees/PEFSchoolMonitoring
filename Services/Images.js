import * as firebase from "firebase";
import "firebase/firestore";
import CollectionNames from "./CollectionNames";

export function UploadImage(obj) {
  return new Promise((resolve, reject) => {
    try {
      obj.blob = null;
      console.log(obj);
      firebase
        .firestore()
        .collection(CollectionNames.Images)
        .add(obj)
        .then((res) => {
          console.log(res);
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    } catch (err) {
      reject(err);
    }
  });
}

export function GetImages(schoolId, grade, section) {
  return new Promise((resolve, reject) => {
    try {
      firebase
        .firestore()
        .collection(CollectionNames.Images)
        .get()
        .then((res) => {
          if (res.docs.length > 0) {
            let images = [];
            res.docs.forEach((x) => (x.exists ? images.push(x.data()) : null));
            resolve(images);
          }
          resolve(null);
        })
        .catch((err) => reject(err))
        .catch((err) => reject(err));
    } catch (err) {
      reject(err);
    }
  });
}
