
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './auth/Register/Signup';
import Login from './auth/Login/Login';
import Homepae from './components/homepae';
import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  useEffect(()=>{
    const email=localStorage.getItem('uid');
    if(email==null){
      navigate('/login');
      console.log('hi');
    }else{
      navigate('/homepage');
      console.log("hello");

    }
  },[])
  return (

    <div className="App">
      <Routes>
        <Route path='/' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/homepage' element={<Homepae />}></Route>
      </Routes>
    </div>
  );
}

export default App;
