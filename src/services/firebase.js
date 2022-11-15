import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyAqyGbLFuQ2-2o3PnYbGx6ICb7qw3kH4Bw",
    authDomain: "av2-firebase-92c9d.firebaseapp.com",
    projectId: "av2-firebase-92c9d",
    storageBucket: "av2-firebase-92c9d.appspot.com",
    messagingSenderId: "417970154782",
    appId: "1:417970154782:web:e4083ecb6dff067b176d0f"
  };
  

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp