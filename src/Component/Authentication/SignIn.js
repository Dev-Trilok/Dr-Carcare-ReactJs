import React from 'react'
import { StyledFirebaseAuth } from 'react-firebaseui';
import firebase from "firebase";
import FirebaseApp from "../../Firebase";
import { Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

export default function SignIn() {
    const history=useHistory()
    const handleAuthSuccess=()=>{
        history.replace('/')
    }
    return (
        <div style={{padding:100}}>
              <StyledFirebaseAuth
              uiConfig={{
                callbacks: {
                  signInSuccessWithAuthResult(authResult, redirectUrl) {
                    handleAuthSuccess();
                    return false;
                  },
                },
                signInFlow: "popup",
                signInOptions: [
                  {
                    provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                    recaptchaParameters: {
                      type: "image",
                      size: "invisible",
                      badge: "bottomleft",
                    },
                    defaultCountry: "IN",
                  },
                ],
              }}
              firebaseAuth={FirebaseApp.auth()}
            />
          
            <h4 style={{textAlign:'center'}}>New user   <Button component={Link} to="/signUp"  variant='outlined'>Register here..</Button> </h4>
        </div>
    )
}
