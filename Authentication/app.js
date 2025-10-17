// --------------------  Firebase Authentication --------------------

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import {
    getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect, FacebookAuthProvider
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

// Initialize Firebase Authentication and get a reference to the service
const firebaseConfig = {
    apiKey: "AIzaSyC4W9WjfmorIpnqomgz_D6YcGfQPImCAUo",
    authDomain: "fir-c315a.firebaseapp.com",
    projectId: "fir-c315a",
    storageBucket: "fir-c315a.firebasestorage.app",
    messagingSenderId: "141668794531",
    appId: "1:141668794531:web:2c48eb03e2a1fd78927f16",
    measurementId: "G-HYVC1MJKHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// Login Form 
const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');
const email = document.getElementById('sEmail');
const password = document.getElementById('sPassword');
const lemail = document.getElementById('lemail');
const lpassword = document.getElementById('lpassword');
const signUp = document.getElementById("submitSignUp");
const signIn = document.getElementById("submitSignIn");
const signInWithGoogle = document.getElementById("signInWithGoogle");
const signInWithFacebook = document.getElementById("signInWithFacebook");

signUpButton.addEventListener('click', function () {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
})
signInButton.addEventListener('click', function () {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
})

// SignUp Functionality
function signUpFunc() {

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);

        })
        .catch((error) => {
            console.log(error.message);
        });

}
signUp.addEventListener("click", signUpFunc)

// SignIp Functionality
function signInFunc() {

    signInWithEmailAndPassword(auth, lemail.value, lpassword.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // location.href = "https://google.com"
        })
        .catch((error) => {
            console.log(error.message);
        });
};
signIn.addEventListener("click", signInFunc)

// // on Auth State Changed = Get Currently signed-in use data
onAuthStateChanged(auth, (user) => {

    if (user) {
        const uid = user.uid;
        console.log("Last User is signed in", uid)

    } else {
        console.log("User is signed out")
    }
});

// currentUser Checks
const user = auth.currentUser;
if (user) {
    console.log("User is signed in", user)
} else {
    console.log("No user is signed in")
};

// Sign-in with Google

async function signWithGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            const getAdd = getAdditionalUserInfo(result);
            console.log("Signed use is = ", user, getAdd, token);

        }).catch((error) => {
            // Handle Errors here.
            console.log(error.message)
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    // signInWithRedirect(auth, provider);
}
signInWithGoogle.addEventListener('click', signWithGoogle)

// Sign-in With FaceBook
async function signWithFacebook() {
    const provider = new FacebookAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            console.log("Signed use is = ", user, credential, accessToken);
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            console.log(error.message)
            const credential = FacebookAuthProvider.credentialFromError(error);
        });
}
signInWithFacebook.addEventListener('click', signWithFacebook)

// --------------------  Firebase Authentication End --------------------
