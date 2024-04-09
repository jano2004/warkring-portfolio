import {auth} from "../Connection/FirebaseConfig";

export function fetchDisplaynameForLogin() {
    if(auth.currentUser) {
        return auth.currentUser.displayName ? auth.currentUser.displayName : 'Login';
    }
    return 'Login';
}

export function fetchLoginState() {
    return auth.currentUser;
}