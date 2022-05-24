import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import {Routes , Route,BrowserRouter} from 'react-router-dom';
import Nav from './Nav';
import { useEffect,useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase';
import { unstable_batchedUpdates } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/user/userSlice';
import ProfileScreen from './screens/ProfileScreen';
import axios from 'axios';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // const [testAPI,setTestAPI] = useState([]);

  useEffect(() =>  {

    const unSubscribe = onAuthStateChanged(auth , user => {

      if(user){
        // logged In
        dispatch(login({...user}))
      }else {
        // logged Out
        dispatch(logout())
      }

    });

    return unSubscribe;

  },[dispatch]);
  
  // useEffect(() => {
  //   axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=91d464a3d96fe8ff91806690c4840900&with_genres=27&page=2`)
  //   .then(response => {
  //     console.log(response);
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // },[]);

  return (
    <div className="app">
      {!user ? 
      <LoginScreen /> : 
      <BrowserRouter>
        <Routes>
        <Route index path='/' element={<HomeScreen />} />
        <Route path='/profile' element={<ProfileScreen />} />
        </Routes>
      </BrowserRouter>
      }
    </div>
  );
}

export default App;
