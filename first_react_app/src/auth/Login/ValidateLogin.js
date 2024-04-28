
import { auth} from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {doc,setDoc} from 'firebase/firestore';
import {db} from '../../firebase';
import homepae from '../../components/homepae';


export async function validateLogin(event,emailValue,passValue,navigate){
    event.preventDefault();
    const pass = passValue.current.value;
    const email= emailValue.current.value;
    await signInWithEmailAndPassword(auth,email,pass).then(
        (userCredential)=>{
        const user = userCredential.user;
        const uid=user.uid;
        localStorage.setItem('uid',uid);
        navigate('/homepage')
        }
    ).catch((error)=>{
        const errorCode=error.code;
        const errorMessage=error.message;
        console.log(errorCode);             
        alert("Invalid Email or Password");
    }
    )
}