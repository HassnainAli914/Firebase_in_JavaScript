// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// Import configuration from other folder or Add firebaseConfig Below as written
import {firebaseConfig} from "../firebaseConfig.js"

// Your web app's Firebase configuration
// const firebaseConfig = {
    // apiKey:  Add your Firebase configuration Here,
    // authDomain:  Add your Firebase configuration Here,
    // projectId:  Add your Firebase configuration Here,
    // storageBucket:  Add your Firebase configuration Here,
    // messagingSenderId:  Add your Firebase configuration Here,
    // appId:  Add your Firebase configuration Here,
    // measurementId:  Add your Firebase configuration Here
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Add data
let add = document.getElementById("add");
async function added() {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let readList = document.getElementById("readList");
    readList.innerHTML = "";

    try {
        const docRef = await addDoc(collection(db, "users"), {
            first: firstName.value,
            last: lastName.value,
            createdAt: new Date().toLocaleString()
        });
        console.log("Document written with ID: ", docRef.id);
        console.log("✅ User Added: ", docRef);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    ReadData()
};
add.addEventListener('click', added)

// Read Data
let readData = document.getElementById("read");
let readList = document.getElementById("readList");

async function ReadData() {
    readList.innerHTML = "";

    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {

            const data = JSON.stringify(doc.data());
            const dataLoaded = JSON.parse(data);
            readList.innerHTML += `
                    <li id="${doc.id}">
                    <strong>Firstname:</strong> ${dataLoaded.first}<br>
                    <strong>Lastname:</strong> ${dataLoaded.last}<br>
                    <button class="delete-btn" data-id="${doc.id}">Delete</button>
                    </li><br>
            `;
            console.log(doc.id, dataLoaded);
        });

    } catch (error) {
        console.log(error.message);
    }
}
readData.addEventListener('click', ReadData)

// Delete Data
let deleteData = readList;
async function DeleteData(e) {
    readList.innerHTML = "";

    if (e.target.classList.contains("delete-btn")) {
        const id = e.target.getAttribute("data-id");
        try {
            await deleteDoc(doc(db, "users", id));
            console.log("✅ User Deleted:", id);
            ReadData(); // refresh list
        } catch (error) {
            console.log("❌ Error deleting:", error.message);
        }
    }
};
deleteData.addEventListener('click', DeleteData)
