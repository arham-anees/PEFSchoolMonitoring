import * as firebase from "firebase";
import CollectionNames from "./CollectionNames";

export function LoginWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(token);
      console.log(user);
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}

export function LoginWithFacebook() {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithRedirect(provider)
    .then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(token);
      console.log(user);
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}

export function CreateUserWithEmailAndPassword(email, password) {
  if (email !== undefined || email !== "") {
    if (email !== undefined || email !== "") {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    }
  }
}
export function SignInWithEmailAndPassword(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
}

export function SignOut() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      // Sign-out successful.
    })
    .catch(function (error) {
      // An error happened.
    });
}
// //Listen for authentication state to change.
// firebase.auth().onAuthStateChanged((user) => {
//   if (user != null) {
//     console.log("We are authenticated now!");
//   }
//   //Do other things
// });

export function IsAuthenticated() {
  let IsSignedIn = false;
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      IsSignedIn = true;
      console.log("all good to go");
    }
  });
  return IsSignedIn;
}

export function AssignRole(email, role) {
  return new Promise((resolve, reject) => {
    try {
      let db = firebase.firestore();
      db.collection(CollectionNames.UserRoles)
        .doc(email)
        .get()
        .then((doc) => {
          if (doc.exists) {
            reject("User is already assigned role");
          } else {
            db.collection(CollectionNames.UserRoles)
              .doc(email)
              .set({
                roleName: role,
                email: email,
                assignedBy: firebase.auth().currentUser.uid,
                assignedOn: Date.now(),
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

export function GetRole(email) {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection(CollectionNames.UserRoles)
      .doc(email)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data());
          resolve(doc.data().roleName);
        } else {
          reject("Please wait for your role");
        }
      })
      .catch((err) => reject(err));
  });

  // var citiesRef = firebase.firestore().collection("cities");

  // citiesRef.doc("SF").set({
  //   name: "San Francisco",
  //   state: "CA",
  //   country: "USA",
  //   capital: false,
  //   population: 860000,
  //   regions: ["west_coast", "norcal"],
  // });
  // citiesRef.doc("LA").set({
  //   name: "Los Angeles",
  //   state: "CA",
  //   country: "USA",
  //   capital: false,
  //   population: 3900000,
  //   regions: ["west_coast", "socal"],
  // });
  // citiesRef.doc("DC").set({
  //   name: "Washington, D.C.",
  //   state: null,
  //   country: "USA",
  //   capital: true,
  //   population: 680000,
  //   regions: ["east_coast"],
  // });
  // citiesRef.doc("TOK").set({
  //   name: "Tokyo",
  //   state: null,
  //   country: "Japan",
  //   capital: true,
  //   population: 9000000,
  //   regions: ["kanto", "honshu"],
  // });
  // citiesRef.doc("BJ").set({
  //   name: "Beijing",
  //   state: null,
  //   country: "China",
  //   capital: true,
  //   population: 21500000,
  //   regions: ["jingjinji", "hebei"],
  // });

  // var docRef = firebase.firestore().collection("cities").doc("SF");

  // docRef
  //   .get()
  //   .then(function (doc) {
  //     if (doc.exists) {
  //       console.log("Document data:", doc.data());
  //     } else {
  //       // doc.data() will be undefined in this case
  //       console.log("No such document!");
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log("Error getting document:", error);
  //   }); //);
}
