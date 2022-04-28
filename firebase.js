// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCODWQl_LocNVoNXqIy27bgVgIkMu9FbVU",

  authDomain: "react-spike-test-with-firebase.firebaseapp.com",

  projectId: "react-spike-test-with-firebase",

  storageBucket: "react-spike-test-with-firebase.appspot.com",

  messagingSenderId: "723466277797",

  appId: "1:723466277797:web:4b4c2150662c982ea9ce4c",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export { app };
