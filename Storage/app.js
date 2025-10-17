// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll, deleteObject } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";

// Import configuration from other folder or Add firebaseConfig Below as written
import {firebaseConfig} from "../firebaseConfig.js"

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey:  Add your Firebase configuration Here,
//     authDomain:  Add your Firebase configuration Here,
//     projectId:  Add your Firebase configuration Here,
//     storageBucket:  Add your Firebase configuration Here,
//     messagingSenderId:  Add your Firebase configuration Here,
//     appId:  Add your Firebase configuration Here,
//     measurementId:  Add your Firebase configuration Here
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const listRef = ref(storage, 'images/');

// Dom Node
let uploadBtn = document.getElementById("uploadBtn");
let fileInput = document.getElementById("uploadImg");
let link = document.getElementById("link");

// Upload Files
async function Upload() {
    let file = fileInput.files[0]

    if (!file) {
        console.log("No file selected.");
        return;
    }

    try {
        const fileRef = ref(storage, `images/${file.name}`);
        console.log(fileRef);
        const snapshot = await uploadBytes(fileRef, file);
        const url = await getDownloadURL(snapshot.ref);
        link.innerHTML = `Uploaded file Link: <a href="${url}" target="_blank">Click to Show Image</a>.`
        console.log("Uploaded! File URL:", url);

    } catch (error) {
        console.log(error.message);
    }
    List()
};
uploadBtn.addEventListener('click', Upload)

// List All Uploaded Files
let listBtn = document.getElementById("listBtn");
let list = document.getElementById("list");

async function List() {
    list.innerHTML = "";

    try {
        const listA = await listAll(listRef);
        console.log("All results:", listA);

        // Show subfolders (prefixes)
        listA.prefixes.forEach((folderRef) => {
            const li = document.createElement("li");
            li.textContent = `📁 Folder: ${folderRef.name}`;
            list.appendChild(li);
        });

        // Show file items
        for (const itemRef of listA.items) {
            const url = await getDownloadURL(itemRef);
            const li = document.createElement("li");
            li.innerHTML += `
            <img src="${url}" style="width: 100px; height: 100px;">
            <a href="${url}" target="_blank">${itemRef.name}</a> <br> 
            <button class="delete-btn" data-id="${itemRef.name}">Delete</button>`;
            list.appendChild(li);
        };
    } catch (error) {
        console.log(error.message);
    }
};
listBtn.addEventListener('click', List)

// Delete Listed Files
let deleteData = document.getElementById("list");

async function DeleteFile(e) {
    list.innerHTML = "";

    if (e.target.classList.contains("delete-btn")) {
        const id = e.target.getAttribute("data-id");

        try {
            const desertRef = ref(storage, `images/${id}`);
            await deleteObject(desertRef);
            console.log("✅ File Deleted:", id);
            List() //Reload List Function

        } catch (error) {
            console.log("❌ Error deleting:", error.message);
        }
    }
};
deleteData.addEventListener('click', DeleteFile)