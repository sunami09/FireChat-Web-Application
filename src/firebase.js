import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyChoodeMvbh_9qUaDPPTPU-JFGR-C8BfXY",
    authDomain: "firechat-6f5a2.firebaseapp.com",
    projectId: "firechat-6f5a2",
    storageBucket: "firechat-6f5a2.appspot.com",
    messagingSenderId: "136960750773",
    appId: "1:136960750773:web:48bc6ab56088ff1b7bfafc"
}).auth();