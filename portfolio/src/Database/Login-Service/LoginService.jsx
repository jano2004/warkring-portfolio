import { auth } from '../Connection/FirebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";

export async function loginUser(email, password, handleHomeClick) {
    try {
        await login(email, password);
        successfulLogin(email, handleHomeClick);
        return true;
    } catch (error) {
        console.log('Error signing in: ', error.code);
        console.log('Cause: ', error.message);
        return false;
    }
}

async function login(email, password) {
    await signInWithEmailAndPassword(auth, email, password);
}

function successfulLogin(email, handleHomeClick) {
    console.log('Signed in successful', email);
    handleHomeClick();
}
