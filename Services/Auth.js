import * as firebase from "firebase";
import "firebase/firestore";
import CollectionNames from "./CollectionNames";

// export function LoginWithGoogle() {
//   var provider = new firebase.auth.GoogleAuthProvider();
//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then(function (result) {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       var token = result.credential.accessToken;
//       // The signed-in user info.
//       var user = result.user;
//       console.log(token);
//       console.log(user);
//       // ...
//     })
//     .catch(function (error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // The email of the user's account used.
//       var email = error.email;
//       // The firebase.auth.AuthCredential type that was used.
//       var credential = error.credential;
//       console.log(error);
//       reject(error);
//     });
// }

// export function LoginWithFacebook() {
//   return new Promise((resolve, reject) => {
//     var provider = new firebase.auth.FacebookAuthProvider();
//     firebase
//       .auth()
//       .signInWithRedirect(provider)
//       .then(function (result) {
//         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//         var token = result.credential.accessToken;
//         // The signed-in user info.
//         var user = result.user;
//         console.log(token);
//         console.log(user);
//         resolve(user);
//         // ...
//       })
//       .catch(function (error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         // ...
//         console.log(error);
//         reject(error);
//       });
//   });
// }

export function CreateUserWithEmailAndPassword(email, password) {
  alert("creating your account");
  if (email !== undefined || email !== "") {
    if (password !== undefined || password !== "") {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    } else alert("invalid user password");
  } else alert("invalid user email");
}
export function SignInWithEmailAndPassword(email, password) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => resolve(res))
      .catch(function (error) {
        console.error("Error logging in", error);
        reject(error);
      });
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

export function GetRole(email) {
  return new Promise((resolve, reject) => {
    try {
      firebase
        .firestore()
        .collection(CollectionNames.Profile)
        .doc(email)
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log(doc.data());
            resolve(doc.data().roleName);
          } else {
            resolve("null");
          }
        })
        .catch((err) => reject(err));
    } catch (err) {
      reject(err);
      console.error("Error", err);
    }
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
