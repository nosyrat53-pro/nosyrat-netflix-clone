import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import Nav from '../Nav';
import './ProfileScreen.css';
import {selectUser} from '../features/user/userSlice';
import { signOut } from "firebase/auth";
import {auth} from '../firebase';

const ProfileScreen = (props) => {
    const user = useSelector(selectUser);
    useEffect(() => {
      console.log(user);
    
      return () => {

      }
    }, []);

    const signout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    };
    
    return <div className='profilescreen'>
            <Nav />

            <div className='profilescreen__body'>
                <h1>Edit Profile</h1>

                <div className='profilescreen__info'>
                    <img 
                    src="data:image/jpeg;base64,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"
                    alt="profile avatar"
                    />
                    <div className='profilescreen__details'>
                        <h2>{user.email}</h2>
                        <div className='profilescreen__plans'>

                        <h3>plans</h3>
                        <p>Renewal Date: 04/03/2022</p>

                        <div className='profilescreen__plan'>
                            <div className='profilescreen__leftPlan'>
                                <h4>Netflix Standard</h4>
                                <h5>1080p</h5>
                            </div>
                            <button>Subscribe</button>
                        </div>

                        <div className='profilescreen__plan'>
                            <div className='profilescreen__leftPlan'>
                                <h4>Netflix Basic</h4>
                                <h5>480p</h5>
                            </div>
                            <button>Subscribe</button>
                        </div>

                        <div className='profilescreen__plan'>
                            <div className='profilescreen__leftPlan'>
                                <h4>Netflix Premium</h4>
                                <h5>4K+HDR</h5>
                            </div>
                            <button disabled className='currentbutton'>Current Package</button>
                        </div>

                        <button onClick={signout} className='profilescreen__signOut'>Sign Out</button>
                        </div>
                    </div>

                </div>
            </div>
    </div>
};

export default ProfileScreen;