import { auth } from './Connection/FirebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";


export async function createUserForTestPurpose(email, password, displayName) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        await userCredential.user.updateProfile({
            displayName: displayName
        });

        console.log('User created with displayName:', displayName);
    } catch (error) {
        console.log(error.code, error.message);
    }
}