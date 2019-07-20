import * as firebase from "firebase";
var config = {
  apiKey: "AIzaSyDabJkDoj1huqrxOVAn789dBQ3r0Emh4dQ",
  authDomain: "proyectocrm-ed7af.firebaseapp.com",
  databaseURL: "https://proyectocrm-ed7af.firebaseio.com",
  projectId: "proyectocrm-ed7af",
  storageBucket: "proyectocrm-ed7af.appspot.com",
  messagingSenderId: "51432789794"
};
firebase.initializeApp(config);

 

export const Autentication= firebase.auth();
export const Storage = firebase.storage();
export const Autenticacion= firebase.auth;
export const firebaseDatabase = firebase.database();
export default firebase;