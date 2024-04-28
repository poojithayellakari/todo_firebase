const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const { initializeApp } = require("firebase/app");
const { setDoc, doc, getDoc, getFirestore } = require("firebase/firestore");
const express = require("express");
const cors = require("cors");

const functions = require("firebase-functions");

const firebaseConfig = {
  apiKey: "AIzaSyDq36lavDbwIKILjHM1-2hLfhvwonmrIzg",
  authDomain: "linkedin-react-93d32.firebaseapp.com",
  projectId: "linkedin-react-93d32",
  storageBucket: "linkedin-react-93d32.appspot.com",
  messagingSenderId: "894434390134",
  appId: "1:894434390134:web:181d1f86dae69a7e25ef57",
  measurementId: "G-Q2NYSGEPTS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* Express with CORS & automatic trailing '/' solution */
const expressRouter = express();

expressRouter.use(cors({ origin: true }));

// Curd operations for todo
expressRouter.post("/addtodo", async (request, response) => {
  var body = JSON.parse(request.body);
  uid = body.uid;
  var todos = body.todos;
  await setDoc(doc(db, "todos", uid), { tasks: todos });

  response.send({ status: "sucess" });
});

expressRouter.post("/updatetodo", async (request, response) => {
  var body = JSON.parse(request.body);
  uid = body.uid;
  var todos = body.todos;
  await setDoc(doc(db, "todos", uid), { tasks: todos });

  response.send({ status: "sucess" });
});

expressRouter.post("/deletetodo", async (request, response) => {
  var body = JSON.parse(request.body);
  uid = body.uid;
  var todos = body.todos;
  await setDoc(doc(db, "todos", uid), { tasks: todos });

  response.send({ status: "sucess" });
});

expressRouter.post("/gettodos", async (request, response) => {
  var body = JSON.parse(request.body);
  const docRef = doc(db, "todos", body.uid);
  const docSnap = await getDoc(docRef);
 
  response.send(docSnap.data().tasks);
});

// not as clean, but a better endpoint to consume
const api3 = functions.https.onRequest((request, response) => {
  if (!request.path) {
    request.url = `/${request.url}`; // prepend '/' to keep query params if any
  }
  return expressRouter(request, response);
});

module.exports = {
  api3,
};
