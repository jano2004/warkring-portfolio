import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAyS41uD17F7i286aiKqoV-fkIcu6v2ed8",
    authDomain: "portfolio-91949.firebaseapp.com",
    projectId: "portfolio-91949",
    storageBucket: "portfolio-91949.appspot.com",
    messagingSenderId: "194298962321",
    appId: "1:194298962321:web:a890a93157bcf40126ba30"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);