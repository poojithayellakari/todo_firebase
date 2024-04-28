
import {createUserWithEmailAndPassword  } from 'firebase/auth';
import {auth} from '../../firebase';
import {doc,setDoc} from 'firebase/firestore';
import {db} from '../../firebase';
import homepae from '../../components/homepae';

export async function validateForm(event,emailValue,passValue,passValue2,navigate){
    event.preventDefault();
    try{
        let regex=/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9].*[0-9]).{8,}$/;
        const pass1=passValue.current.value;
        const pass2 = passValue2.current.value;
        const email= emailValue.current.value;
        if(regex.test(pass1)){
            if(pass1==pass2){
                await createUserWithEmailAndPassword(auth,email,pass1)
                .then(async(userCredential) =>{
                    const user=userCredential.user;
                    const uid=user.uid;
                    localStorage.setItem('uid',uid);
                    console.log(uid);
                    await setDoc(doc(db,'todos',uid),{tasks:[]});
                    navigate('/homepage');
                    }
                )
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    alert(errorMessage);
                });
            } else{
                alert("password and re-entered password didn't match");
            }   
        }else{
            alert("please enter the strong password");
        }
    }
    catch(error){
        alert(error);
    }
    
}