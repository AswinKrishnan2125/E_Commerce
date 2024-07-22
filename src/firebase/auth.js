import {auth}  from "./firebase";
import { createUserWithEmailAndPassword ,GoogleAuthProvider, signInWithPopup,signOut,signInWithEmailAndPassword} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = (email, password) =>{
    return createUserWithEmailAndPassword(auth,email, password);
}

export const doSignInWithEmailAndPassword = (email, password) =>{
    return signInWithEmailAndPassword(auth,email, password);
};

export const doSigninWithGoogle=async()=>{
    const provider = new GoogleAuthProvider();
    const result=await signInWithPopup(auth,provider);

    return result;
}

export const doSignOut = () =>{
    return signOut(auth);
}

export const doPasswordReset = (email) =>{
    return auth.sendPasswordResetEmail(email);
}