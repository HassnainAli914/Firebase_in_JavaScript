# Firebase Practice Project (HTML, CSS, JS)

project:
  name: Firebase Practice
  type: Frontend Only
  language: HTML, CSS, JavaScript

description: >
  This project demonstrates how to integrate Firebase services 
  (Authentication, Firestore, and Storage) in a pure HTML, CSS, and JavaScript environment 
  using Firebase CDN modules.

setup:
  1: Go to https://console.firebase.google.com/
  2: Create a Firebase project and add a Web App.
  3: Copy your Firebase config keys.
  4: Paste them in firebase-config.js.
  5: Enable Authentication and Firestore in the Firebase Console.

firebase_config:
  example:
    apiKey: "YOUR_API_KEY"
    authDomain: "your-app.firebaseapp.com"
    projectId: "your-app"
    storageBucket: "your-app.appspot.com"
    messagingSenderId: "SENDER_ID"
    appId: "APP_ID"

features:
  - Email & Google Authentication
  - Facebook Login Support
  - Firestore CRUD (Create, Read, Update, Delete)
  - Firebase Storage Upload & Fetch

run_locally:
  method: >
    Open project in VS Code and use Live Server 
    or simply open index.html in a browser.

author:
  name: Hassnain Ali
  purpose: Firebase learning and practice
  license: Free for educational use
