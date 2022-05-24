import React, { useRef, useState } from 'react';
import './SignUpScreen.css';
import { Link } from 'react-router-dom';
import {auth} from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Provider } from 'react-redux';

function SignUpScreen() {
  const [er,setEr] = useState(null);
  const [isThereAnError,setIsThereAnError] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {

    e.preventDefault();
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then((result) => {
      console.log(result)
    })
    .catch(error => {
      console.log(error.code);
      if(error.code == 'auth/invalid-email'){
        setEr('Email is invalid');
      }else if(error.code == 'auth/weak-password'){
        setEr('Password should be at least 6 characters');
      }else if(error.code == 'auth/email-already-in-use'){
        setEr('Email already used')
      }
      setIsThereAnError(true);
      console.log(error.message);
    });

  }

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(userCredential)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.code);

      if(error.code == 'auth/user-not-found'){
        setEr('Email or password is wrong!');
      }else if(error.code == 'auth/invalid-email'){
        setEr('Email is invalid');
      }else if(error.code == 'auth/wrong-password') {
        setEr('Password is incorrect');
      }

      setIsThereAnError(true);
      console.log(error.message);
    });
  }

  const handleEmailChange = (e) => {
    setIsThereAnError(false);
  }

  const handlePasswordChange = (e) => {
    setIsThereAnError(false);
  }

  return (
    <>
    <div className='signUpScreen'>

        <form>
        <h1>Sign In</h1>

        <input 
        type="email" 
        onChange={(e) => handleEmailChange(e)} 
        placeholder='Email' 
        ref={emailRef} 
        />

        <input 
        type="password" 
        placeholder='Password' 
        onChange={(e) => handlePasswordChange(e)} 
        ref={passwordRef} 
        />

        <button type='submit' onClick={signIn}>Sign In</button>

        <h4>
            <span className='signUpScreen__gray'>New to Netflix ? </span>
            <a className='signUpScreen__link' onClick={register}>Sign Up now.</a>
        
        </h4>
        </form>


    </div>
            <div className={`signUpScreen__errorMessage ${isThereAnError ? 'showErrorMessageAni' : 'hideErrorMessageAni'}`}>
            {er}
        </div>
        </>
  )
}

export default SignUpScreen;