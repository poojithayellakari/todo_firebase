import React from 'react'
import logo from '../head.jpg';
import styles from './header.module.css';
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate=useNavigate();
  async function logout() { 
    localStorage.removeItem('uid');    
      navigate('/login');
  }
  return (
    <div className={styles.Apptitle}>
        <h1>Things To Be Done</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Header