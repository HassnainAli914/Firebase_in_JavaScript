<h1 align="center">🔥 Firebase_in_JavaScript 🔥</h1>

<p align="center">
A simple and elegant practice project to learn <b>Firebase</b> with pure <b>HTML, CSS, and JavaScript</b> — 
covering Authentication, Firestore, and Storage.
</p>

---

## 🚀 Project Overview

**Firebase_in_JavaScript** demonstrates how to integrate Firebase in a **frontend-only** environment without any frameworks.  
It helps beginners understand the core Firebase SDKs using **ES Modules** and **browser-based setup**.

---

## 🧩 Tech Stack

- 🧠 **JavaScript (ES6 Modules)**
- 🎨 **HTML5 / CSS3**
- ☁️ **Firebase (Auth, Firestore, Storage)**
- 🧭 **Firebase CDN SDK**

---

## ⚙️ Setup Instructions

### 1️⃣ Create Firebase Project
- Go to **[Firebase Console](https://console.firebase.google.com/)**
- Click **Add Project** → Create a Web App → Copy your Firebase config

### 2️⃣ Add Config to Project
In your project folder, a file named **`firebase-config.js`** and paste:

```js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
```

---

## 🔐 Authentication Features

- Sign up / Sign in with **Email & Password**
- Login with **Google**
- Optional **Facebook** authentication
- Logout and check user state in real-time

> 💡 To use Facebook login:  
> 1. Create an app at [Facebook Developers](https://developers.facebook.com/)  
> 2. Copy **App ID** and **App Secret**  
> 3. Paste them in Firebase Console → Authentication → Facebook Provider  
> 4. Add your site URL in **Valid OAuth Redirect URIs**

---

## 🧾 Firestore Database Features

Perform **CRUD (Create, Read, Update, Delete)** operations using Firestore.

```js
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } 
from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
```

- 🟢 **Create:** Add new user data  
- 🟡 **Read:** Fetch and display documents  
- 🔵 **Update:** Modify user information  
- 🔴 **Delete:** Remove any record by ID

---

## ☁️ Firebase Storage

- Upload images, documents, or files  
- Fetch and display uploaded file URLs  
- Delete unwanted files from storage  

```js
import { ref, uploadBytes, getDownloadURL } 
from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";
```

---

## 🧠 Learning Goals

- Understand Firebase setup & initialization  
- Learn Authentication (Email, Google, Facebook)  
- Practice Firestore CRUD operations  
- Manage uploads with Firebase Storage  
- Handle async/await with real Firebase responses  

---

## 🖥️ How to Run Locally

1. Open the project in **VS Code**  
2. Right-click your `index.html` and select **“Open with Live Server”**  
3. Test your Firebase features directly in the browser console  

---

## 👨‍💻 Author

**Name:** Hassnain Ali  
**Project:** Firebase_in_JavaScript  
**Purpose:** Firebase learning and practice project  
**Language:** HTML • CSS • JavaScript  
**License:** Free for educational and personal use  

---

<p align="center">⭐ If you like this project, give it a star on GitHub!</p>
