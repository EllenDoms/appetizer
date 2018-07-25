import * as firebase from "firebase";

export const config = {
  apiKey: "AIzaSyB6kavKoPoLLOa6N7eW3IbygXnH-htTHMQ",
  authDomain: "appetizer-4151b.firebaseapp.com",
  databaseURL: "https://appetizer-4151b.firebaseio.com",
  projectId: "appetizer-4151b",
  storageBucket: "appetizer-4151b.appspot.com",
  messagingSenderId: "753957259618",
  auth: ".json?auth=EBRWKRaOxTSi7t9dAdeRL4sbv74SWh4VSUJErfgI"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const databaseContactForm = firebase.database().ref('contactForm');
export const databaseWorkshopForm = firebase.database().ref('workshopForm');
